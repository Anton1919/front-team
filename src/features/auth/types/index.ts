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