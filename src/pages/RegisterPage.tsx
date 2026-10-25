import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import TextField from '../components/ui/TextField';
import Button from '../components/ui/Button';
import { validateRegistration } from '../lib/validateRegistration';
import type { RegistrationValues } from '../lib/validateRegistration';

export default function RegisterPage() {
  
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '', email: '', password: '', confirmPassword: '', acceptTerms: false
  });
  
  
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  
  const errors = validateRegistration(values);

  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues(current => ({ 
      ...current, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  }

  
  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    setTouched(current => ({ ...current, [event.target.name]: true }));
  }

  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    setSubmitAttempted(true);
    
    
    if (Object.keys(errors).length === 0) {
      setIsSuccess(true);
    }
  }


  if (isSuccess) {
    return <p role="status">Thanks, {values.fullName}. You are registered.</p>;
  }

  
  const getError = (field: keyof RegistrationValues) => {
    return (touched[field] || submitAttempted) ? errors[field] : undefined;
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2>Register</h2>
      
      <TextField
        label="Full Name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getError('fullName')}
      />
      
      <TextField
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getError('email')}
      />
      
      <TextField
        label="Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getError('password')}
      />
      
      <TextField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={getError('confirmPassword')}
      />
      
      <label className="check">
        <input 
          type="checkbox" 
          name="acceptTerms" 
          checked={values.acceptTerms} 
          onChange={handleChange}
          onBlur={handleBlur}
        />
        I accept the terms and conditions
      </label>
      {getError('acceptTerms') && <p className="field-error">{getError('acceptTerms')}</p>}
      
      <Button type="submit">Create account</Button>
    </form>
  );
}