import { FieldValues, UseFormGetValues } from 'react-hook-form'

const emailPattern = {
  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/gi,
  message: 'Enter a valid email address.',
}

const email = { required: 'You must enter your email.', pattern: emailPattern }

const username = {
  required: 'You must enter your email or username.',
  minLength: { value: 3, message: 'Field must be more than 3 characters' },
}

const loginPassword = { required: 'You must enter your password.' }

const registerPassword = {
  required: 'You must enter your password.',
  minLength: { value: 6, message: 'Password must be more than 6 characters' },
  maxLength: { value: 20, message: 'Password must be shorter than 20 characters' },
}

const cPassword = <T extends FieldValues>(getValues: UseFormGetValues<T>): any => {
  return {
    required: 'You must enter your password.',
    validate: (value: string) => {
      const { password } = getValues()

      return password === value || 'The password must match the new password!'
    },
  }
}

export const RegisterValidate = { email, username, registerPassword, cPassword }
export const LoginValidate = { username, loginPassword }
export const ForgotPassValidate = { email }
export const NewPasswordValidate = { registerPassword, cPassword }
