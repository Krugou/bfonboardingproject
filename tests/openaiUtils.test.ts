import {jest} from '@jest/globals';
import {fetchOpenAIResponse} from '../api/src/utils/openaiUtils';
import OpenAI from 'openai';

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
    const request = {
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
    const request = {
      messages: [{role: 'user', content: 'test-message'}],
      model: 'test-model',
    };

    jest.spyOn(OpenAI.prototype.chat.completions, 'create').mockRejectedValueOnce(new Error('Test error'));

    await expect(fetchOpenAIResponse(request)).rejects.toThrow('Failed to fetch OpenAI response: Test error');
  });
});
