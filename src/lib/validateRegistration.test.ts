import { it, expect } from 'vitest';
import { validateRegistration } from './validateRegistration';
import type { RegistrationValues } from './validateRegistration';


const valid: RegistrationValues = {
  fullName: 'Aisha Baimukan',
  email: 'aisha.baimukan@example.com',
  password: 'baimukan2026',
  confirmPassword: 'baimukan2026',
  acceptTerms: true
};

it('1 returns {} when nothing is wrong', () => {
  const errors = validateRegistration(valid);
  expect(errors).toEqual({}); // no errors
});

it('2 rejects a name that is only spaces', () => {
  const errors = validateRegistration({ ...valid, fullName: '   ' });
  expect(errors.fullName).toBe('Enter your full name');
});

it('3 rejects an email without a domain', () => {
  const errors = validateRegistration({ ...valid, email: 'aliya@example' });
  expect(errors.email).toBe('Enter a valid email, like name@example.com');
});

it('4 accepts a short password if it has a number (fails length check)', () => {
  const errors = validateRegistration({ ...valid, password: 'alm26', confirmPassword: 'alm26' });
  expect(errors.password).toBe('Use at least 8 characters');
});

it('5 rejects a password without numbers', () => {
  const errors = validateRegistration({ ...valid, password: 'almatycity', confirmPassword: 'almatycity' });
  expect(errors.password).toBe('Include at least one number');
});

it('6 rejects mismatched confirm password', () => {
  const errors = validateRegistration({ ...valid, confirmPassword: 'almaty2027' });
  expect(errors.confirmPassword).toBe('Passwords do not match');
});

it('7 rejects unchecked terms', () => {
  const errors = validateRegistration({ ...valid, acceptTerms: false });
  expect(errors.acceptTerms).toBe('Accept the terms to continue');
});