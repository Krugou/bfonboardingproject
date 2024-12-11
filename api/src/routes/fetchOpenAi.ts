import {NextFunction, Request, Response, Router} from 'express';
import {FetchURLError, OpenAIError} from '../utils/customErrors';
import {fetchOpenAIResponse} from '../utils/openaiUtils';
import {industries} from '../data/industries';
import * as cheerio from 'cheerio';
const router = Router();
const BF_INNO_PASSWORD = process.env.BFINNO_PASSWORD;

/**
 * Cleans and extracts relevant text content from HTML
 * @param $ - Cheerio instance
 * @returns cleaned text content
 */
const extractRelevantContent = ($: cheerio.CheerioAPI): string => {
  // Remove unwanted elements
  $(
    'script, style, noscript, iframe, img, svg, [style*="display:none"]',
  ).remove();

  // Get main content areas
  const mainContent = $(
    'main, article, .content, .main, #main, #content',
  ).text();
  if (mainContent.length > 100) {
    return mainContent;
  }

  // Fallback to body content if no main content found
  const bodyText = $('body').text();

  // Clean the text
  return bodyText
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/\n\s*/g, '\n') // Clean up newlines
    .replace(/\t/g, ' ') // Replace tabs with spaces
    .trim();
};

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
    const absoluteUrl = url.startsWith('http') ? url : `https://${url}`;

    try {
      const response = await fetch(absoluteUrl);
      if (!response.ok) {
        throw new FetchURLError(
          `Failed to fetch the URL: ${response.statusText}`,
        );
      }
      const data = await response.text();

      let $;
      try {
        $ = cheerio.load(data, {
          xml: false,
        });
      } catch (parseError) {
        throw new FetchURLError('Failed to parse website content');
      }

      const textContent = extractRelevantContent($);

      if (!textContent || textContent.length < 50) {
        throw new FetchURLError('Insufficient content found on the page');
      }

      const openAIRequest = {
        messages: [
          {
            role: 'system',
            content: `Summarize the following content in JSON format with "select industry from these values: ${industries} as key industry" , "address guess if not clear", "numberOfEmployees in single number guess positive number if not clear", "keywords "first,second,third" related to the website" and "create few sentence word summary about the company": ${textContent}`,
          },
        ],
        model: 'gpt-4o',
      };
      const openAIResponse = await fetchOpenAIResponse(openAIRequest);
      console.log('🚀 ~ openAIResponse:', openAIResponse.costInfo);
      const summaryText = openAIResponse.choices[0].message.content;
      console.log('🚀 ~ summaryText:', summaryText);

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
            content: `Create a profile about the user's company and assess the feasibility of getting funding based on the following information in two sentences: "${JSON.stringify(
              userInfo,
            )}" in json format`,
          },
        ],
        model: 'gpt-4o',
      };
      const openAIResponse = await fetchOpenAIResponse(openAIRequest);
      const profileText = openAIResponse.choices[0].message.content;

      res.status(200).json(profileText);
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
