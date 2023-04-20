import { instance } from '@/common/constants/instance'
import {
  AuthDataType,
  ForgotField,
  LoginDataType,
  LoginResponseType,
  MeResponseType,
  NewPasswordType,
  RegistrationConfirmationType,
} from '@/features/auth/types'

export const AuthAPI = {
  me(): Promise<MeResponseType> {
    return instance.get('auth/me').then(res => res.data)
  },
  register(data: AuthDataType) {
    return instance.post('auth/registration', data)
  },
  confirm(data: RegistrationConfirmationType) {
    return instance.post('auth/registration-confirmation', data)
  },
  resendRegistration(data: ForgotField): Promise<{}> {
    return instance.post('auth/registration-email-resending', data)
  },
  login(data: LoginDataType): Promise<LoginResponseType> {
    return instance.post('auth/login', data)
  },
  refreshToken() {
    return instance
      .post<{ accessToken: string }>('auth/refresh-token')
      .then(res => res.data)
      .catch(res => res)
  },
  forgotPassword(data: ForgotField): Promise<{}> {
    return instance.post('auth/password-recovery', data)
  },
  newPassword(data: NewPasswordType): Promise<{}> {
    return instance.post('auth/new-password', data)
  },
  logout() {
    return instance.post('auth/logout')
  },
}
