const request = require('supertest');
const app = require('../app');

test('Simple test', () => {
  expect(1).toBe(1);
});

describe('Test the root path', () => {
  it('should create a new post', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Test Create User', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        name: 'Doe Sam',
        email: 'email@email.com',
        password: 'secret123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
