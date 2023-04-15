import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/common/components/button/Button';
import { useModal } from '@/common/components/modalWindow/useModal';
import { ModalLayout } from '@/common/components/modalWindow/modalLayout';

import { useGetProfile } from '@/features/account/hooks/useGetProfile';

import svg from './image.svg';
import deleteSvg from './delete.svg';

import s from './ProfilePhoto.module.scss';

type PropsType = {
  setImgFile: (img: File | undefined) => void
}

const ProfilePhoto = ({ setImgFile }: PropsType) => {
  const { data } = useGetProfile();
  const { isOpen, openModal, closeModal } = useModal();
  const [toggleModal, setToggleModal] = useState(false);
  const [avatarURL, setAvatarURL] = useState<string | undefined>(data?.profilePhotoLink);
  const [modalPhoto, setModalPhoto] = useState<string>();
  const [file, setFile] = useState<File | undefined>();

  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    setToggleModal(true);
    if (e.target.files && e.target.files.length) {
      const objectUrl = URL.createObjectURL(e.target?.files[0] as File);
      setModalPhoto(objectUrl);
      setFile(e.target?.files[0]);
    }
  };
  const handleSave = () => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setAvatarURL(objectUrl);
      setImgFile(file);
    }
    setToggleModal(false);
    closeModal();
  };
  const closeHandler = () => {
    setModalPhoto(undefined);
    setToggleModal(false);
    closeModal();
  };

  const onDeletePhotoHandler = () => {
    setAvatarURL(undefined);
    setFile(undefined);
    setImgFile(undefined);
  };

  useEffect(() => {
    setAvatarURL(data?.profilePhotoLink);
  }, [data]);

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
              <Image src={deleteSvg} alt={'delete'} width={15} height={15} />
            </button>
          )}
        </div>
      </div>

      <div className={s.addPhoto}>
        <Button
          button_name={avatarURL ? 'Change photo' : 'Add a Profile Photo'}
          variant={'transparent'}
          button_handler={openModal}
        />
      </div>

      <ModalLayout
        isOpen={isOpen}
        title={'Add a Profile Photo'}
        closeModal={closeHandler}
      >
        {!toggleModal ? (
          <>
            <div className={s.modalPhoto}>
              <Image src={svg} alt={'my-profile photo'} width={46} height={46} />
            </div>
            <label className={s.selectPhotoFromComputer}>
              <input type="file" onChange={onPhotoSelected} />
              Select from computer
            </label>
          </>
        ) : (
          <>
            <div className={s.modalSave}>
              <Image
                className={s.img1}
                src={modalPhoto ? modalPhoto : svg}
                alt={'my-profile photo'}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              <div className={s.modalImage}>
                <Image
                  className={s.img2}
                  src={modalPhoto ? modalPhoto : svg}
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
                button_handler={handleSave}
              />
            </div>
          </>
        )}
      </ModalLayout>
    </div>
  );
};

export default ProfilePhoto;
