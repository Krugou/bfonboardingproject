import { config } from 'dotenv';
import OpenAI from 'openai';

config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not defined in environment variables');
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

interface OpenAIRequest {
  messages: Array<{ role: string; content: string }>;
  model: string;
}

interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    message: { role: string; content: string };
    finish_reason: string;
  }>;
}

export const fetchOpenAIResponse = async (
  request: OpenAIRequest,
): Promise<OpenAIResponse> => {
  try {
    const completion = await openai.chat.completions.create(request);
    return completion;
  } catch (error) {
    throw new Error(`Failed to fetch OpenAI response: ${error.message}`);
  }
};