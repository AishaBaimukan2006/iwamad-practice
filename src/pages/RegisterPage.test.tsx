import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import RegisterPage from './RegisterPage';

test('shows errors when the empty form is submitted', async () => {
  render(<RegisterPage />);

  await userEvent.click(screen.getByRole('button', { name: 'Create account' }));

  expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  expect(screen.getByText('Accept the terms to continue')).toBeInTheDocument();
});