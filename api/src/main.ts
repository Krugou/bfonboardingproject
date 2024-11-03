import cors from 'cors';
import {config} from 'dotenv';
import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import fetchWebsiteRouter from './routes/fetchWebsite.js';

const app = express();
const port = process.env.PORT || 3007;

config();

if (process.env.test === 'test') {
  console.log('Test env works');
} else {
  console.log('Not working');
}

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

const startTime: Date = new Date();

app.use(fetchWebsiteRouter);

// New route to respond with "Hello World"
app.get('/', (_req, res) => {
  res.send('Hello World');
});

// Middleware for centralized error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Bfinno Server serving on http://localhost:${port}. Started: ${startTime.toLocaleString()}. `,
  );
});
