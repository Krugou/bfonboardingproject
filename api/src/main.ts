import cors from 'cors';
import {config} from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import errorHandler from './middleware/errorHandler.js';
import fetchOpenAiRouter from './routes/fetchOpenAi.js';
import companyInfoRouter from './routes/companyInfo.js';
import baseRoutes from './routes/baseRoutes.js';
const app = express();
const port = process.env.PORT || 3007;

config();

if (process.env.test === 'test') {
  console.log('Test env works');
} else {
  console.log('Not working');
}

// Configure rate limiter
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many requests, please try again later.',
    retryAfter: 'Wait for 1 minute',
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Apply rate limiter to all routes
app.use(limiter);

const startTime: Date = new Date();

app.use(fetchOpenAiRouter);
app.use(companyInfoRouter);
app.use(baseRoutes);

// Middleware for centralized error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Bfinno Server serving on http://localhost:${port}. Started: ${startTime.toLocaleString()}. `,
  );
});
