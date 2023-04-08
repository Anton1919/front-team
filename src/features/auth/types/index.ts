export type AuthDataType = {
  username: string
  email: string,
  password: string
}

export type LoginType = Omit<AuthDataType, 'username'>

export type RegistrationConfirmationType = {
  code: string
}

export type NewPasswordType = {
  newPassword: string,
  recoveryCode: string
}