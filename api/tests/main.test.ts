import request from 'supertest';
import { app } from '../src/app';

describe('POST /total', () => {
  it('should return the total price', async () => {
    const response = await request(app)
      .post('/total')
      .send({ shirt1: 3, shirt2: 0, shirt3: 0, shirt4: 0, shirt5: 0 });

    expect(response.status).toBe(200);
    expect(response.body.total).toBe(24);
  });

  it('should return a 400 error when one of the shirt counts is not number', async () => {
    const response = await request(app)
      .post('/total')
      .send({ shirt1: 2, shirt2: 'two', shirt3: 2, shirt4: 1, shirt5: 1 });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('All item counts must be valid numbers');
  });

  it('should return a 400 error when one of the shirt counts is missing', async () => {
    const response = await request(app)
      .post('/total')
      .send({ shirt1: 2, shirt2: 2, shirt3: 2, shirt5: 1 });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('All item counts must be valid numbers');
  });
});