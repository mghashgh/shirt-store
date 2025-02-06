import request from 'supertest';
import { calculateTotal } from '../src/calculateTotal';

describe('Calculate total', () => {
  it('should return the total price with the biggest discount', async () => {
    const total = calculateTotal(2, 2, 2, 1, 1);
    expect(total).toBe(53.6);
  });

  it('when all item counts are zero', async () => {
    const total = calculateTotal(0, 0, 0, 0, 0);
    expect(total).toBe(0);
  });
  it('when 100 of the same item there should be no discount', async () => {
    const total = calculateTotal(0, 0, 100, 0, 0);
    expect(total).toBe(800);
  });

  it('5% discount', async () => {
    const total = calculateTotal(1, 1, 0, 0, 0);
    expect(total).toBe(15.2);
  });

  it('10% discount', async () => {
    const total = calculateTotal(1, 1, 1, 0, 0);
    expect(total).toBe(21.6);
  });

  it('15% discount', async () => {
    const total = calculateTotal(1, 1, 1, 1, 0);
    expect(total).toBe(27.2);
  });

  it('20% discount', async () => {
    const total = calculateTotal(1, 1, 1, 1, 1);
    expect(total).toBe(32);
  });
});
