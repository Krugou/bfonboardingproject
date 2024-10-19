const doFetch = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

interface CompanyInfo {
  businessId: string;
  name: string;
  address: string;
  website: string;
  mainBusinessLine: string;
}

const fetchCompanyInfo = async (businessId: string): Promise<CompanyInfo | undefined> => {
  try {
    const data = await doFetch(
      `https://avoindata.prh.fi/opendata-ytj-api/v3/companies?businessId=${businessId}`,
    );
    if (!data.companies) {
      console.error('No company data found');
      return;
    }
    const companyInfo = data.companies[0];
    console.log('Company info:', companyInfo);
    return companyInfo;
  } catch (error) {
    console.error('Error fetching company info:', error);
  }
};

// Unit tests for fetchCompanyInfo function
import {jest} from '@jest/globals';

jest.mock('./api', () => {
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

export {fetchCompanyInfo};
