/**
 * Formats the URL based on environment and input
 * @param url The input URL to format
 * @returns Properly formatted URL string
 */
const formatUrl = (url: string): string => {
  if (url.startsWith('https')) {
    return url;
  }

  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3007'
      : 'https://bfinno-7094a0361315.herokuapp.com/';

  return `${baseUrl}/${url.replace(/^\/+/, '')}`;
};

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

/**
 * Generic fetch wrapper with error handling and typing
 * @param url The URL to fetch from
 * @returns Promise with the parsed response data
 * @throws Error if the fetch fails or returns non-200 status
 */
export const doFetch = async <T>(
  url: string,
  options?: FetchOptions,
): Promise<T> => {
  try {
    if (!url) {
      throw new Error('URL is required');
    }

    const formattedUrl = formatUrl(url);
    const defaultHeaders = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'method': 'GET',
    };

    const response = await fetch(formattedUrl, {
      method: options?.method || 'GET',
      headers: {...defaultHeaders, ...options?.headers},
      ...(options?.body && {body: options.body}),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `HTTP error! status: ${response.status}`,
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
