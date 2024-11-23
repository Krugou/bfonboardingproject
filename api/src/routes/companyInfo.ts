
import { NextFunction, Request, Response, Router } from 'express';
import fetch from 'node-fetch';
import { CustomAPIError } from '../utils/customErrors';

const router = Router();

interface CompanyInfo {
  businessId: string;
  name: string;
  address: string;
  website: string;
  mainBusinessLine: string;
}

/**
 * Fetches company information from the PRH API
 * @param businessId - Finnish business ID
 */
const fetchCompanyInfo = async (businessId: string): Promise<CompanyInfo | null> => {
  const response = await fetch(
    `https://avoindata.prh.fi/opendata-ytj-api/v3/companies?businessId=${businessId}`
  );

  if (!response.ok) {
    throw new CustomAPIError(`PRH API error: ${response.statusText}`, response.status);
  }

  const data = await response.json();
  return data.companies?.[0] || null;
};

router.get(
  '/company/:businessId',
  async (req: Request, res: Response, next: NextFunction) => {
    const { businessId } = req.params;

    // Validate business ID format (Finnish business ID format)
    const businessIdRegex = /^[0-9]{7}-[0-9]$/;
    if (!businessIdRegex.test(businessId)) {
      return res.status(400).json({
        error: 'Invalid business ID format. Expected format: 1234567-8'
      });
    }

    try {
      const companyInfo = await fetchCompanyInfo(businessId);

      if (!companyInfo) {
        return res.status(404).json({
          error: 'Company not found'
        });
      }

      res.status(200).json(companyInfo);
    } catch (error) {
      if (error instanceof CustomAPIError) {
        return res.status(error.statusCode).json({ error: error.message });
      }
      console.error('Error fetching company info:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

export default router;