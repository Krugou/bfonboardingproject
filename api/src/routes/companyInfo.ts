import express, {Request, Response, NextFunction} from 'express';
import {Router} from 'express';

interface CompanyInfo {
  businessId: string;
  name: string;
  address: string;
  website: string;
  mainBusinessLine: string;
}

interface PRHApiResponse {
  companies?: CompanyInfo[];
  type?: string;
  version?: string;
}

class CompanyApiError extends Error {
  constructor(message: string, public statusCode: number = 500) {
    super(message);
    this.name = 'CompanyApiError';
  }
}

const router: Router = express.Router();

/**
 * Fetches company information from the PRH API
 * @route GET /company/:businessId
 * @param req Express request object
 * @param res Express response object
 * @param next Express next function
 * @throws {CompanyApiError} When API request fails
 */
router.get(
  '/company/:businessId',
  async (
    req: Request<{businessId: string}>,
    res: Response<CompanyInfo | {error: string}>,
    next: NextFunction,
  ) => {
    try {
      const {businessId} = req.params;

      if (!businessId || !/^[0-9-]+$/.test(businessId)) {
        throw new CompanyApiError('Invalid business ID format', 400);
      }

      const response = await fetch(
        `https://avoindata.prh.fi/opendata-ytj-api/v3/companies?businessId=${businessId}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new CompanyApiError(
          `PRH API error: ${response.statusText}`,
          response.status,
        );
      }

      const data: PRHApiResponse = (await response.json()) as PRHApiResponse;

      if (!data.companies?.length) {
        throw new CompanyApiError('Company not found', 404);
      }

      res.json(data.companies[0]);
    } catch (error) {
      if (error instanceof CompanyApiError) {
        res.status(error.statusCode).json({error: error.message});
      } else {
        next(error);
      }
    }
  },
);

export default router;
