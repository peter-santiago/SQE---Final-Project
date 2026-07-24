const request = require('supertest');
const app = require('../index');

describe('API Tests', () => {
  test('GET / should return hello message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
     // Change this to make it fail:
    expect(response.body).toHaveProperty('message', 'Wrong Message!');
  });

  test('GET /api/users should return users array', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty('name');
  });
});