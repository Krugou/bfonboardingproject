import {config} from 'dotenv';
import express from 'express';
import fetchWebsiteRouter from './routes/fetchWebsite.js';
const app = express();
const port = 3007;
config();
if (process.env.test === 'test') {
  console.log('Test env works');
} else {
  console.log('Not working');
}
// Middleware to parse JSON bodies
app.use(express.json());

const startTime: Date = new Date();

app.use(fetchWebsiteRouter);
app.listen(port, () => {
  console.log(
    `Bfinno Server serving on http://localhost:${port}. Started: ${startTime.toLocaleString()}. `,
  );
});
