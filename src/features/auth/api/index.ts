import { instance } from '@/constants/instance';
import { AuthDataType } from '@/features/auth/types';

export const AuthAPI = {
  me() {
    return instance.post('auth/me');
  },
  register(data: AuthDataType) {
    return instance.post('auth/registration', data);
  },
  login(data: AuthDataType) {
    return instance.post('auth/registration', data);
  }
}