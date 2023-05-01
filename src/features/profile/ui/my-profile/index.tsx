import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import svg from '../profile-settings/profile-photo/image.svg'

import s from './profile.module.scss'

import { Button } from '@/common/components/button/Button'
import { Posts } from '@/features/posts/ui/posts/posts'
import { useGetProfile } from '@/features/profile/hooks/useGetProfile'

const Profile: NextPage = () => {
  const { push } = useRouter()
  const { data: user } = useGetProfile()

  const onClickHandler = async (): Promise<void> => {
    await push('/my-profile/edit-profile')
  }

  const avatar = user?.avatar[1].key

  return (
    <div className={s.profile}>
      <div className={s.about}>
        <div className={s.profilePhoto}>
          <Image src={avatar || svg} alt="profile photo" width={204} height={204} />
        </div>

        <div className={s.description}>
          <div className={s.descriptionHeader}>
            <h1 className={s.title}>{user?.username}</h1>
            <Button buttonName="Profile Settings" variant="white" buttonHandler={onClickHandler} />
          </div>

          <div className={s.subscribers}>
            <div className={s.items}>
              <span>2 211</span>
              <p>Subscriptions</p>
            </div>
            <div className={s.items}>
              <span>2 000</span>
              <p>Subscribers</p>
            </div>
            <div className={s.items}>
              <span>2 500</span>
              <p>Publications</p>
            </div>
          </div>

          <div className={s.textDescriptions}>
            <p>About me: {user?.aboutMe}</p>
          </div>
        </div>
      </div>

      <Posts />
    </div>
  )
}

export default Profile
