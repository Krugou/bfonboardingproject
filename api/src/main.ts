import {config} from 'dotenv';
import express, {Request, Response} from 'express';
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

// Integration tests for API endpoints
import request from 'supertest';

describe('API Endpoints', () => {
  it('should return 400 if password or URL is missing', async () => {
    const res = await request(app).post('/fetch-website').send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Password and URL are required');
  });

  it('should return 403 if password is invalid', async () => {
    const res = await request(app)
      .post('/fetch-website')
      .send({password: 'invalid', url: 'http://example.com'});
    expect(res.status).toBe(403);
    expect(res.body.error).toBe('Invalid password');
  });

  it('should return 200 and JSON summary if password and URL are valid', async () => {
    const res = await request(app)
      .post('/fetch-website')
      .send({password: process.env.BFINNO_PASSWORD, url: 'http://example.com'});
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
  });
});
