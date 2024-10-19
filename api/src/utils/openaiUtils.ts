import {config} from 'dotenv';
import OpenAI from 'openai';

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

export const fetchOpenAIResponse = async (
  request: OpenAIRequest,
): Promise<OpenAIResponse> => {
  try {
    // @ts-ignore
    return await openai.chat.completions.create(request);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch OpenAI response: ${error.message}`);
    } else {
      throw new Error('Failed to fetch OpenAI response: Unknown error');
    }
  }
};

// Unit tests for fetchOpenAIResponse function
import {jest} from '@jest/globals';

jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => {
    return {
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            id: 'test-id',
            object: 'test-object',
            created: 1234567890,
            model: 'test-model',
            choices: [
              {
                message: {role: 'assistant', content: 'test-content'},
                finish_reason: 'test-finish-reason',
              },
            ],
          }),
        },
      },
    };
  });
});

describe('fetchOpenAIResponse', () => {
  it('should fetch OpenAI response successfully', async () => {
    const request: OpenAIRequest = {
      messages: [{role: 'user', content: 'test-message'}],
      model: 'test-model',
    };

    const response = await fetchOpenAIResponse(request);

    expect(response).toEqual({
      id: 'test-id',
      object: 'test-object',
      created: 1234567890,
      model: 'test-model',
      choices: [
        {
          message: {role: 'assistant', content: 'test-content'},
          finish_reason: 'test-finish-reason',
        },
      ],
    });
  });

  it('should throw an error if OpenAI response fails', async () => {
    const request: OpenAIRequest = {
      messages: [{role: 'user', content: 'test-message'}],
      model: 'test-model',
    };

    jest.spyOn(openai.chat.completions, 'create').mockRejectedValueOnce(new Error('Test error'));

    await expect(fetchOpenAIResponse(request)).rejects.toThrow('Failed to fetch OpenAI response: Test error');
  });
});
