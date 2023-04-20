import { instance } from '@/common/constants/instance'
import { ProfileType } from '@/features/profile/types'

export const ProfileAPI = {
  updateProfileInfo(data: Omit<ProfileType, 'avatar'>) {
    return instance.put('user/profile/info', data).then(res => res.data)
  },
  updateProfilePhoto(data: FormData | '') {
    return instance.put('user/profile/photo', data).then(res => res.data)
  },
  getProfile() {
    return instance.get<ProfileType>('user/profile').then(res => res.data)
  },
}
