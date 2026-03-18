import express, {Request, Response, Router} from 'express';

const router: Router = express.Router();
const startTime: Date = new Date();

/**
 * @route GET /
 * @description Root endpoint
 * @access Public
 */
router.get('/', (_req: Request, res: Response) => {
  res.send('Hello cutie, how are you doing?');
});

/**
 * @route GET /health
 * @description Health check endpoint
 * @access Public
 */
router.get('/health/status', (_req: Request, res: Response) => {
  console.log('Health check');
  res.status(200).json({
    status: true,
    startTime: startTime.toLocaleString(),
  });
});

export default router;
