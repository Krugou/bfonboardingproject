import {NextFunction, Request, Response, Router} from 'express';
import fetch from 'node-fetch';
import {FetchURLError, OpenAIError} from '../utils/customErrors';
import {fetchOpenAIResponse} from '../utils/openaiUtils';

const router = Router();
const BF_INNO_PASSWORD = process.env.BFINNO_PASSWORD;

router.post(
  '/fetch-website',
  // @ts-expect-error
  async (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    console.log(
      `[${new Date().toISOString()}] POST /fetch-website - Request received:`,
      {
        url: req.body.url,
        ip: req.ip,
        userAgent: req.headers['user-agent'],
      },
    );

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
        throw new FetchURLError(
          `Failed to fetch the URL: ${response.statusText}`,
        );
      }
      const data = await response.text();

      const openAIRequest = {
        messages: [
          {
            role: 'system',
            content: `Summarize the following content in JSON format with industry, address, number of employees, www-address , keywords "first,second,third" related to the website and create 500 word summary about the company: ${data}`,
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
    } finally {
      console.log(
        `[${new Date().toISOString()}] POST /fetch-website - Request completed in ${
          Date.now() - startTime
        }ms`,
      );
    }
  },
);

router.post(
  '/user-info',
  // @ts-expect-error
  async (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    console.log(
      `[${new Date().toISOString()}] POST /user-info - Request received:`,
      {
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        userInfoKeys: Object.keys(req.body.userInfo || {}),
      },
    );

    const {password, userInfo} = req.body;

    if (!password || !userInfo) {
      return res
        .status(400)
        .json({error: 'Password and user info are required'});
    }

    if (password !== BF_INNO_PASSWORD) {
      return res.status(403).json({error: 'Invalid password'});
    }

    try {
      const openAIRequest = {
        messages: [
          {
            role: 'system',
            content: `Create a profile about the user's company and assess the feasibility of getting funding based on the following information: "${JSON.stringify(
              userInfo,
            )}" in json format`,
          },
        ],
        model: 'gpt-4o',
      };
      const openAIResponse = await fetchOpenAIResponse(openAIRequest);
      const profileText = openAIResponse.choices[0].message.content;
      const jsonStartIndex = profileText.indexOf('{');
      const jsonEndIndex = profileText.lastIndexOf('}') + 1;
      const jsonString = profileText.substring(jsonStartIndex, jsonEndIndex);
      const profileJson = JSON.parse(jsonString);

      res.status(200).json(profileJson);
    } catch (error) {
      if (error instanceof OpenAIError) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({error: error.message});
      } else if (error instanceof Error) {
        console.error(`Unexpected error: ${error.message}`);
        res.status(500).json({error: 'An unexpected error occurred'});
      } else {
        console.error(`Unknown error: ${error}`);
        res.status(500).json({error: 'Failed to create the user profile'});
      }
    } finally {
      console.log(
        `[${new Date().toISOString()}] POST /user-info - Request completed in ${
          Date.now() - startTime
        }ms`,
      );
    }
  },
);

export default router;
