import { instance } from '@/constants/instance';
import { AuthDataType, RegistrationConfirmationType } from '@/features/auth/types';

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
  login(data: AuthDataType) {
    return instance.post('auth/login', data);
  },
  refreshToken() {
    return instance.post('auth/refresh-token', {}, { withCredentials: true });
  },
  logOut() {
    return instance.post('auth/logout')
  },
}