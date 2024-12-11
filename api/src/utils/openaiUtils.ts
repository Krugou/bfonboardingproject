import {config} from 'dotenv';
import OpenAI from 'openai';
import {OpenAIError} from './customErrors';

config();

const OPENAI_API_KEY: string | undefined = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not defined in environment variables');
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

interface OpenAIRequest {
  messages: Array<{role: string; content: string}>;
  model: string;
}

interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    message: {role: string; content: string};
    finish_reason: string;
  }>;
}

interface CostInfo {
  inputTokens: number;
  outputTokens: number;
  totalCost: number;
}

interface OpenAIResponseWithCost extends OpenAIResponse {
  costInfo: CostInfo;
}

// Pricing per 1K tokens (as of 2024, update as needed)
const MODEL_PRICING: {[key: string]: {input: number; output: number}} = {
  'gpt-4': {input: 0.03, output: 0.06},
  'gpt-3.5-turbo': {input: 0.0005, output: 0.0015},
};

const calculateCost = (
  model: string,
  inputTokens: number,
  outputTokens: number,
): CostInfo => {
  const pricing = MODEL_PRICING[model] || MODEL_PRICING['gpt-3.5-turbo'];
  const inputCost = (inputTokens / 1000) * pricing.input;
  const outputCost = (outputTokens / 1000) * pricing.output;

  return {
    inputTokens,
    outputTokens,
    totalCost: inputCost + outputCost,
  };
};

export const fetchOpenAIResponse = async (
  request: OpenAIRequest,
): Promise<OpenAIResponseWithCost> => {
  try {
    // @ts-expect-error
    const response = await openai.chat.completions.create({
      ...request,
      model: request.model || 'gpt-3.5-turbo',
    });

    const costInfo = calculateCost(
      response.model,
      response.usage?.prompt_tokens || 0,
      response.usage?.completion_tokens || 0,
    );
    // @ts-expect-error

    return {
      ...response,
      costInfo,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new OpenAIError(
        `Failed to fetch OpenAI response: ${error.message}`,
      );
    } else {
      throw new OpenAIError('Failed to fetch OpenAI response: Unknown error');
    }
  }
};
