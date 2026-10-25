import { describe, it, expect } from 'vitest';
import { validateSignup } from './validateSignup';

const valid = { fullName: 'Aliya Nurlanovna', email: 'aliya@example.com', tickets: '2' };
const run = (changes: Partial<typeof valid>, seatsLeft = 10) =>
  validateSignup({ ...valid, ...changes }, seatsLeft);

describe('validateSignup', () => {
  it('returns no errors for valid values', () => {
    expect(run({})).toEqual({});
  });
  it('rejects 0 tickets', () => {
    expect(run({ tickets: '0' }).tickets).toBe('Choose 1 to 4 tickets');
  });
  it('rejects 5 tickets', () => {
    expect(run({ tickets: '5' }).tickets).toBe('Choose 1 to 4 tickets');
  });
  it('rejects 1.5 tickets', () => {
    expect(run({ tickets: '1.5' }).tickets).toBe('Choose 1 to 4 tickets');
  });
  it('accepts 4 tickets', () => {
    expect(run({ tickets: '4' })).toEqual({});
  });
  it('rejects more tickets than seats left', () => {
    expect(run({ tickets: '3' }, 2).tickets).toBe('Only 2 seats left');
  });
});