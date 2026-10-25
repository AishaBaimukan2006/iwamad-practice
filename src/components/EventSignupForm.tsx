import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import TextField from './ui/TextField';
import Button from './ui/Button';
import { validateSignup } from '../lib/validateSignup';
import type { SignupValues } from '../lib/validateSignup';
import type { CampusEvent } from '../data/events';

type EventSignupFormProps = { event: CampusEvent };

const emptyValues: SignupValues = { fullName: '', email: '', tickets: '1' };

export default function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [message, setMessage] = useState('');

  const errors = validateSignup(values, seatsLeft);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) {
      setMessage('');
      return;
    }
    const count = Number(values.tickets);
    setSeatsLeft(seatsLeft - count);
    setMessage(`Booked: ${count} for ${values.fullName.trim()}.`);
    setValues(emptyValues);
    setTouched({});
    setSubmitAttempted(false);
  }

  const getError = (field: keyof SignupValues) =>
    touched[field] || submitAttempted ? errors[field] : undefined;

  return (
    <div>
      <p>Seats left: {seatsLeft}</p>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={getError('fullName')}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={getError('email')}
        />
        <TextField
          label="Tickets"
          type="number"
          name="tickets"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          error={getError('tickets')}
        />
        <Button type="submit">Book</Button>
      </form>
      {message && <p role="status">{message}</p>}
    </div>
  );
}