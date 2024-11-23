import { doFetch } from '@/utils/apiUtils';

interface CompanyInfo {
  businessId: string;
  name: string;
  address: string;
  website: string;
  mainBusinessLine: string;
}

const fetchCompanyInfo = async (
  businessId: string,
): Promise<CompanyInfo | undefined> => {
  try {
    const data = await doFetch<{ companies: CompanyInfo[] }>(
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

interface WebsiteInfo {
  industry: string;
  address: string;
  numberOfEmployees: number;
  wwwAddress: string;
  keywords: string[];
  [key: string]: unknown;
}

/**
 * Fetches and analyzes website information using OpenAI
 * @param url - The website URL to analyze
 * @param password - The authentication password for the API
 * @returns Promise<WebsiteInfo | undefined> - The analyzed website information
 */
const fetchWebsiteInfoOpenAI = async (
  url: string,
  password: string
): Promise<WebsiteInfo | undefined> => {
  try {
    const response = await fetch('/api/fetch-website', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch website info');
    }

    const data = await response.json();
    return data as WebsiteInfo;
  } catch (error) {
    console.error('Error fetching website info:', error);
    throw error;
  }
};

export { fetchCompanyInfo, fetchWebsiteInfoOpenAI };
