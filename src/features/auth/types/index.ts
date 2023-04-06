export type AuthDataType = {
  email: string,
  password: string
}
export type RegistrationConfirmationType = {
  code: string
}

export type NewPasswordType = {
  newPassword: string,
  recoveryCode: string
}

export type AuthState = {
  email: string;
  setEmail: (email: string) => void;
  isAuth: boolean,
  setIsAuth: (isAuth: boolean) => void;
}