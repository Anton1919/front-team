import { useForm } from 'react-hook-form';

export type LoginFormFields = {
  email: string;
  password: string;
  cpassword?: string
};

const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

export const useValidAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<LoginFormFields>();

  const onSubmit = (data) => {
    console.log(data);
    console.log('submitting...');
  };

  const emailRules = { required: 'You must enter your email.', pattern: emailPattern }
  const passwordRules = { required: 'You must enter your password.' }

  const cPasswordRules = {
    required: 'You must enter your password.',
    validate: (value) => {
      const { password } = getValues();
      return password === value || 'The password must match the new password!';
    }
  }

  return { onSubmit, handleSubmit, register, emailRules, errors, passwordRules, cPasswordRules }
};
