import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '@/common/components/button/Button';

import { useGetProfile } from '@/features/account/hooks/useGetProfile';

import svg from '../profile-settings/profile-photo/image.svg'

import s from './profile.module.scss'

const Profile: NextPage = () => {
  const { push } = useRouter();
  const { data: user  } = useGetProfile();

  const testArrayWithPhotoContent = [
    { id: 1, photo: svg },
    { id: 2, photo: svg },
    { id: 3, photo: svg },
    { id: 4, photo: svg },
    { id: 5, photo: svg },
    { id: 6, photo: svg },
    { id: 7, photo: svg },
    { id: 8, photo: svg },
    { id: 9, photo: svg },
    { id: 10, photo: svg },
    { id: 11, photo: svg },
    { id: 12, photo: svg },
    { id: 13, photo: svg },
  ]

  const onClickHandler = () => {
    push('/my-profile/edit-profile')
  }

  return (
    <div className={s.profile}>
      <div className={s.about}>
        <div className={s.profilePhoto}>
          <Image src={user?.profilePhotoLink || svg} alt={'profile photo'} width={204} height={204}/>
        </div>

        <div className={s.description}>
          <div className={s.descriptionHeader}>
            <h1 className={s.title}>{user?.username}</h1>
            <Button button_name={'Profile Settings'} variant={'white'} button_handler={onClickHandler}/>
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
      <div className={s.photoContent}>
        {testArrayWithPhotoContent.map(photo => {
          return (
            <div className={s.photo} key={photo.id}>
              <Image src={photo.photo} alt={'photo content'} width={200} height={200}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Profile;