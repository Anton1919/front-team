import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/shared/button/Button';
import { ModalWindow } from '@/shared/modalWindow/modalWindow';

import svg from './image.svg';
import deleteSvg from './delete.svg';

import s from './ProfilePhoto.module.scss';

const ProfilePhoto = () => {
  const [closeModal, setCloseModal] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(undefined);
  const [savePhoto, setSavePhoto] = useState(false);

  const onButtonHandler = () => {
    setCloseModal(true);
    setToggleModal(false);
  };
  const onPhotoSelected = (e) => {
    setToggleModal(true);
    setImageFile(e.target?.files[0]);
  };
  const onSavePhotoHandler = () => {
    setSavePhoto(true);
    setCloseModal(false);
  };
  const onDeletePhotoHandler = () => {
    setImageFile(null);
    setFileDataURL(undefined);
    setSavePhoto(false);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;

    if (imageFile) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(imageFile);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [imageFile]);

  return (
    <div className={s.wrapper}>
      <div className={s.photoWrapper}>
        <div className={savePhoto ? s.fileDataURL : s.photo}>
          <Image
            src={savePhoto ? fileDataURL : svg}
            alt={'profile photo'}
            width={46}
            height={46}
          />
          {savePhoto && (
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
              <Image src={svg} alt={'profile photo'} width={46} height={46}/>
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
                src={fileDataURL}
                alt={'profile photo'}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              <div className={s.modalImage}>
                <Image
                  className={s.img2}
                  src={fileDataURL}
                  alt={'profile photo'}
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
