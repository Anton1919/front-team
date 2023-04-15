import { instance } from '@/common/constants/instance';
import { AuthDataType, LoginDataType, MeResponseType, NewPasswordType, RegistrationConfirmationType } from '@/features/auth/types';
import { ForgotField } from '@/features/auth/hooks/forgotPassword/useForgotValid';

export const AuthAPI = {
  me(): Promise<MeResponseType> {
    return instance.get('auth/me').then(res => res.data);
  },
  register(data: AuthDataType) {
    return instance.post('auth/registration', data);
  },
  confirm(data: RegistrationConfirmationType) {
    return instance.post('auth/registration-confirmation', data);
  },
  resendRegistration() {
    return instance.post('auth/registration-email-resending', {});
  },
  login(data: LoginDataType) {
    return instance.post('auth/login', data);
  },
  refreshToken() {
    return instance.post<{ accessToken: string }>('auth/refresh-token')
      .then(res => res.data).catch(res => res);
  },
  forgotPassword(data: ForgotField) {
    return instance.post('auth/password-recovery', data);
  },
  newPassword(data: NewPasswordType) {
    return instance.post('auth/new-password', data);
  },
  logout() {
    return instance.post('auth/logout');
  }
};