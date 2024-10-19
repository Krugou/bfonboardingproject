import {jest} from '@jest/globals';
import {fetchCompanyInfo} from '../src/hooks/api';

jest.mock('../src/hooks/api', () => {
  return {
    doFetch: jest.fn().mockResolvedValue({
      companies: [
        {
          businessId: '1234567-8',
          name: 'Test Company',
          address: 'Test Address',
          website: 'https://test.com',
          mainBusinessLine: 'Test Business Line',
        },
      ],
    }),
  };
});

describe('fetchCompanyInfo', () => {
  it('should fetch company info successfully', async () => {
    const businessId = '1234567-8';
    const companyInfo = await fetchCompanyInfo(businessId);

    expect(companyInfo).toEqual({
      businessId: '1234567-8',
      name: 'Test Company',
      address: 'Test Address',
      website: 'https://test.com',
      mainBusinessLine: 'Test Business Line',
    });
  });

  it('should return undefined if no company data found', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({}),
    } as any);

    const businessId = '1234567-8';
    const companyInfo = await fetchCompanyInfo(businessId);

    expect(companyInfo).toBeUndefined();
  });

  it('should throw an error if fetch fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Test error'));

    const businessId = '1234567-8';

    await expect(fetchCompanyInfo(businessId)).rejects.toThrow('Error fetching company info: Test error');
  });
});
