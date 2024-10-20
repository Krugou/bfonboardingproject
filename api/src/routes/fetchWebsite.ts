import {config} from 'dotenv';
import {Request, Response, Router} from 'express';
import fetch from 'node-fetch';
import {fetchOpenAIResponse} from '../utils/openaiUtils';
import { InvalidPasswordError, MissingParameterError, FetchURLError, OpenAIError } from '../utils/customErrors';

config();

const router = Router();
const BF_INNO_PASSWORD = process.env.BFINNO_PASSWORD;

router.post('/fetch-website', async (req: Request, res: Response) => {
  const {password, url} = req.body;

  if (!password || !url) {
    return res.status(400).json({error: 'Password and URL are required'});
  }

  if (password !== BF_INNO_PASSWORD) {
    return res.status(403).json({error: 'Invalid password'});
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new FetchURLError(`Failed to fetch the URL: ${response.statusText}`);
    }
    const data = await response.text();

    const openAIRequest = {
      messages: [
        {
          role: 'system',
          content: `Summarize the following content in JSON format with industry, address, number of employees, www-address and add more data in similar way: ${data}`,
        },
      ],
      model: 'gpt-4o',
    };
    const openAIResponse = await fetchOpenAIResponse(openAIRequest);
    const summaryText = openAIResponse.choices[0].message.content;
    const jsonStartIndex = summaryText.indexOf('{');
    const jsonEndIndex = summaryText.lastIndexOf('}') + 1;
    const jsonString = summaryText.substring(jsonStartIndex, jsonEndIndex);
    const summaryJson = JSON.parse(jsonString);

    res.status(200).json(summaryJson);
  } catch (error) {
    if (error instanceof FetchURLError || error instanceof OpenAIError) {
      console.error(`Error: ${error.message}`);
      res.status(500).json({error: error.message});
    } else if (error instanceof Error) {
      console.error(`Unexpected error: ${error.message}`);
      res.status(500).json({error: 'An unexpected error occurred'});
    } else {
      console.error(`Unknown error: ${error}`);
      res.status(500).json({error: 'Failed to fetch the website content'});
    }
  }
});

export default router;
