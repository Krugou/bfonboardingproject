import {doFetch} from '@/utils/apiUtils';
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
    return await doFetch<CompanyInfo>(`company/${businessId}`);
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
    return await doFetch<WebsiteInfo>('fetch-website', {
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
    return await doFetch<UserProfileInfo>('user-info', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userInfo, password}),
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

interface HealthCheckResponse {
  status: boolean;
  startTime: string;
}

/**
 * Fetches the API server health status
 * @returns Promise<HealthCheckResponse | undefined> - The server health status
 * @throws Error if the health check fails
 */
const fetchHealthStatus = async (): Promise<
  HealthCheckResponse | undefined
> => {
  try {
    console.log('Checking API health...');
    const response = await doFetch<HealthCheckResponse>('/health/status');
    console.log('Health check response:', response);
    return response;
  } catch (error: any) {
    console.error('Health check failed with error:', {
      message: error.message,
      stack: error.stack,
    });
    throw new Error(`API Health check failed: ${error.message}`);
  }
};

export {
  fetchCompanyInfo,
  fetchWebsiteInfoOpenAI,
  fetchUserInfoOpenAI,
  fetchHealthStatus,
};
