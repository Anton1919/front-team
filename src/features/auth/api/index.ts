import { instance } from '@/constants/instance';
import { AuthDataType, RegistrationConfirmationType } from '@/features/auth/types';

export const AuthAPI = {
  me() {
    return instance.post('auth/me');
  },
  register(data: AuthDataType) {
    return instance.post('auth/registration', data);
  },
  confirm(data: RegistrationConfirmationType) {
    return instance.post('auth/registration-confirmation', data);
  },
  login(data: AuthDataType) {
    return instance.post('auth/registration', data);
  }
}