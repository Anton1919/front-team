import { useForm } from 'react-hook-form';

export type LoginFormFields = {
  email: string;
  password: string;
};

const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

export const useLogin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const onSubmit = (data) => {
    console.log(data);
    console.log('submitting...');
  };

  const emailRules = { required: 'You must enter your email.', pattern: emailPattern }
  const passwordRules = { required: 'You must enter your password.' }

  return { onSubmit, handleSubmit, register, emailRules, errors, passwordRules }
};
