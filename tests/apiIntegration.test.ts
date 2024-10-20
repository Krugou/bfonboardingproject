import request from 'supertest';
import app from '../api/src/main';

describe('API Integration Tests', () => {
  it('should fetch website content and return a summary in JSON format', async () => {
    const response = await request(app)
      .post('/fetch-website')
      .send({
        password: process.env.BFINNO_PASSWORD,
        url: 'http://example.com',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('industry');
    expect(response.body).toHaveProperty('address');
    expect(response.body).toHaveProperty('numberOfEmployees');
    expect(response.body).toHaveProperty('wwwAddress');
  });

  it('should return 400 if password or URL is missing', async () => {
    const response = await request(app).post('/fetch-website').send({
      password: process.env.BFINNO_PASSWORD,
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Password and URL are required');
  });

  it('should return 403 if password is invalid', async () => {
    const response = await request(app)
      .post('/fetch-website')
      .send({
        password: 'invalid_password',
        url: 'http://example.com',
      });

    expect(response.status).toBe(403);
    expect(response.body).toHaveProperty('error', 'Invalid password');
  });

  it('should return 500 if fetching the URL fails', async () => {
    const response = await request(app)
      .post('/fetch-website')
      .send({
        password: process.env.BFINNO_PASSWORD,
        url: 'http://invalid-url.com',
      });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to fetch the URL: Not Found');
  });

  it('should return 500 if an unexpected error occurs', async () => {
    const response = await request(app)
      .post('/fetch-website')
      .send({
        password: process.env.BFINNO_PASSWORD,
        url: 'http://example.com',
      });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error', 'An unexpected error occurred');
  });
});
