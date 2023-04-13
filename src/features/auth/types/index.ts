export type AuthDataType = {
  username: string
  email: string,
  password: string
}

export type LoginDataType = {
  emailOrUsername: string;
  password: string;
}

export type RegistrationConfirmationType = {
  code: string
}

export type NewPasswordType = {
  newPassword: string,
  recoveryCode: string
}

export type MeResponseType = {
  userId: number,
  email: string,
  username: string
}