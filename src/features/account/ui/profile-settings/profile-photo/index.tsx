import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/common/components/button/Button';
import { ModalWindow } from '@/common/components/modalWindow/modalWindow';

import svg from './image.svg';
import deleteSvg from './delete.svg';

import s from './ProfilePhoto.module.scss';

type PropsType = {
  setImgFile: (img: File) => void
}

const ProfilePhoto = ({ setImgFile }: PropsType) => {
  const [closeModal, setCloseModal] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [avatarURL, setAvatarURL] = useState<string>();

  const onButtonHandler = () => {
    setCloseModal(true);
    setToggleModal(false);
  };
  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    setToggleModal(true);
    if (e.target.files && e.target.files.length) {
      const objectUrl = URL.createObjectURL(e.target?.files[0] as File)
      setAvatarURL(objectUrl);
      setImgFile(e.target?.files[0])
    }
  };
  const onSavePhotoHandler = () => {
    setCloseModal(false);

  };
  const onDeletePhotoHandler = () => {
    setAvatarURL(undefined);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.photoWrapper}>
        <div className={avatarURL ? s.fileDataURL : s.photo}>
          <Image
            src={avatarURL ? avatarURL : svg}
            alt={'my-profile photo'}
            width={46}
            height={46}
          />
          {avatarURL && (
            <button className={s.deletePhoto} onClick={onDeletePhotoHandler}>
              <Image src={deleteSvg} alt={'delete'} width={15} height={15}/>
            </button>
          )}
        </div>
      </div>

      <div className={s.addPhoto}>
        <Button
          button_name={'Add a Profile Photo'}
          variant={'transparent'}
          button_handler={onButtonHandler}
        />
      </div>

      <ModalWindow
        isOpen={closeModal}
        title={'Add a Profile Photo'}
        setIsOpen={setCloseModal}
        clearStateInProfilePhoto={onDeletePhotoHandler}
      >
        {!toggleModal ? (
          <>
            <div className={s.modalPhoto}>
              <Image src={svg} alt={'my-profile photo'} width={46} height={46}/>
            </div>
            <label className={s.selectPhotoFromComputer}>
              <input type="file" onChange={onPhotoSelected}/>
                  Select from computer
            </label>
          </>
        ) : (
          <>
            <div className={s.modalSave}>
              <Image
                className={s.img1}
                src={avatarURL ? avatarURL : svg }
                alt={'my-profile photo'}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              <div className={s.modalImage}>
                <Image
                  className={s.img2}
                  src={avatarURL ? avatarURL : svg }
                  alt={'my-profile photo'}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
            </div>
            <div className={s.saveButton}>
              <Button
                button_name={'Save'}
                variant={'primary'}
                button_handler={onSavePhotoHandler}
              />
            </div>
          </>
        )}
      </ModalWindow>
    </div>
  );
};

export default ProfilePhoto;
