import { instance } from '@/constants/instance';
import { AuthDataType, LoginType, NewPasswordType, RegistrationConfirmationType } from '@/features/auth/types';
import { ForgotField } from '@/features/auth/hooks/forgotPassword/useForgotValid';

export const AuthAPI = {
  me() {
    return instance.get('auth/me');
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
  login(data: LoginType) {
    return instance.post('auth/login', data);
  },
  refreshToken() {
    return instance.post('auth/refresh-token', {}, { withCredentials: true });
  },
  forgotPassword(data: ForgotField) {
    return instance.post('auth/password-recovery', data);
  },
  newPassword(data: NewPasswordType) {
    return instance.post('auth/new-password', data)
  }
}