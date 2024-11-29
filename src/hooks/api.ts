import {doFetch} from '@/utils/apiUtils';
const baseurl
interface CompanyInfo {
  businessId: string;
  name: string;
  address: string;
  website: string;
  mainBusinessLine: string;
}

interface UserProfileInfo {
  companyProfile: string;
  fundingFeasibility: string;
  recommendations: string[];
  riskFactors: string[];
  [key: string]: unknown;
}

const fetchCompanyInfo = async (
  businessId: string,
): Promise<CompanyInfo | undefined> => {
  try {
    return await doFetch<{companies: CompanyInfo[]}>(
      `https://avoindata.prh.fi/opendata-ytj-api/v3/companies?businessId=${businessId}`,
    ).then((data) => data.companies?.[0]);
  } catch (error) {
    console.error('Error fetching company info:', error);
    return undefined;
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
  password: string,
): Promise<WebsiteInfo | undefined> => {
  try {
    return await doFetch<WebsiteInfo>('/fetch-website', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({url, password}),
    });
  } catch (error) {
    console.error('Error fetching website info:', error);
    throw error;
  }
};

const fetchUserInfoOpenAI = async (
  userInfo: Record<string, unknown>,
  password: string,
): Promise<UserProfileInfo | undefined> => {
  try {
    return await doFetch<UserProfileInfo>('/user-info', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userInfo, password}),
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export {fetchCompanyInfo, fetchWebsiteInfoOpenAI, fetchUserInfoOpenAI};
