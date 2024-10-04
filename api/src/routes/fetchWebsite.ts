import {Request, Response, Router} from 'express';
import fetch from 'node-fetch';
import {fetchOpenAIResponse} from '../utils/openaiUtils.js';
const router = Router();

router.get('/fetch-website', async (req: Request, res: Response) => {
  const url = req.query.url as string;

  if (!url) {
    return res.status(400).json({error: 'URL is required'});
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch the URL: ${response.statusText}`);
    }
    const data = await response.text();

    // Ensure the model parameter is correctly included
    const openAIRequest = {
      messages: [
        {
          role: 'system',
          content: `Summarize the following content in json format with industry, address, number of employees, www-address: ${data}`,
        },
      ],
      model: 'gpt-4o', // Ensure the model parameter is provided
    };
    const openAIResponse = await fetchOpenAIResponse(openAIRequest);
    const summaryText = openAIResponse.choices[0].message.content;
    const jsonStartIndex = summaryText.indexOf('{');
    const jsonEndIndex = summaryText.lastIndexOf('}') + 1;
    const jsonString = summaryText.substring(jsonStartIndex, jsonEndIndex);
    const summaryJson = JSON.parse(jsonString);
    res.status(200).json({summaryJson});
  } catch (error) {
    console.error(`Error fetching URL: ${url}`, error);
    res.status(500).json({error: 'Failed to fetch the website content'});
  }
});

export default router;
