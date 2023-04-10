import React, { useState } from 'react';
import Image from 'next/image';
import FormData from 'form-data';

import { Button } from '@/shared/button/Button';
import { ModalWindow } from '@/shared/modalWindow/modalWindow';

import svg from './image.svg';
import s from './ProfilePhoto.module.scss';

const ProfilePhoto = () => {
  const [closeModal, setCloseModal] = useState(false);

  const [toggleModal, setToggleModal] = useState(false);

  const [img, setImg] = useState(null);

  const [selectedFile, setSelectedFile] = useState<>(null);

  const onButtonHandler = () => {
    setCloseModal(true);
    setToggleModal(false);
  };

  const onMainPhotoSelected = (e: any) => {
    console.log(e.target.files[0]);
    setToggleModal(true);
    setSelectedFile(e.target.files[0]);

    try {
      if (!selectedFile) return;

      const formData = new FormData();
      formData.append('profilePhoto', selectedFile);

      // const { data } = await axios.post('', formData)

      // setImg(data)
    } catch (e: any) {
      console.log(e.response?.data);
    }
  };

  const handleUpload = async () => {
    // preLoader TRUE
    // preLoader FALSE
  };

  return (
    <div className={s.wrapper}>
      <div className={s.photoWrapper}>
        <div className={s.photo}>
          <Image src={svg} alt={'profile photo'} width={46} height={46} />
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
      >
        {!toggleModal ? (
          <>
            <div className={s.modalPhoto}>
              <Image src={svg} alt={'profile photo'} width={46} height={46} />
            </div>
            <label className={s.selectPhotoFromComputer}>
              <input type="file" onChange={onMainPhotoSelected} />
              Select from computer
            </label>
          </>
        ) : (
          <>
            <div className={s.modalSave}>
              <div className={s.modalImage}>
                <Image src={''} alt={'profile photo'} width={46} height={46} />
              </div>
            </div>
            <div className={s.saveButton}>
              <Button
                button_name={'Save'}
                variant={'primary'}
                button_handler={handleUpload}
              />
            </div>
          </>
        )}
      </ModalWindow>
    </div>
  );
};

export default ProfilePhoto;
