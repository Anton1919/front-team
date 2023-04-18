import React, { ChangeEvent, useState } from 'react';

import Image from 'next/image';

import svg from '@/features/account/ui/profile-settings/profile-photo/image.svg';
import { Button } from '@/common/components/button/Button';
import { useModal } from '@/common/components/modalWindow/useModal';

import s from './AddPostPhoto.module.scss';

const AddPostPhoto = () => {

  const { isOpen, openModal, closeModal } = useModal();
  const [imgFile, setImgFile] = useState<File>();
  const [modalPhoto, setModalPhoto] = useState<string>();
  const [file, setFile] = useState<File | undefined>();
  const [toggleModal, setToggleModal] = useState(false);

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
      // setAvatarURL(objectUrl);
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

  return (
    <div>
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
            {/*<Image*/}
            {/*  className={s.img1}*/}
            {/*  src={modalPhoto ? modalPhoto : svg}*/}
            {/*  alt={'my-profile photo'}*/}
            {/*  fill*/}
            {/*  sizes="(max-width: 768px) 100vw,*/}
            {/*  (max-width: 1200px) 50vw,*/}
            {/*  33vw"*/}
            {/*/>*/}
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
    </div>
  );
};

export default AddPostPhoto;