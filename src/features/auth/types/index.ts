export type AuthDataType = {
  username: string
  email: string
  password: string
}

export type RegisterFormFields = AuthDataType & { cpassword?: string }

export type PasswordFields = {
  password: string
  cpassword: string
}

export type LoginDataType = {
  emailOrUsername: string
  password: string
}

export type RegistrationConfirmationType = {
  code: string
}

export type NewPasswordType = {
  newPassword: string
  recoveryCode: string
}

export type MeResponseType = {
  userId: number
  email: string
  username: string
}

export type LoginResponseType = {
  accessToken: string
}

export type ForgotField = {
  email: string
  recaptchaValue: string
}
