import React, { FC, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/shared/button/Button';
import { ModalWindow } from '@/shared/modalWindow/modalWindow';

import svg from './image.svg';
import s from './ProfilePhoto.module.scss';
type Props = {
  setImgFile: (data: File) => void
}
const ProfilePhoto:FC<Props> = ({ setImgFile }) => {
  const [closeModal, setCloseModal] = useState(false);

  const [toggleModal, setToggleModal] = useState(false);

  const [selectedFile, setSelectedFile] = useState<string>();
  const onButtonHandler = () => {
    setCloseModal(true);
    setToggleModal(false);
  };

  const onMainPhotoSelected = (e: any) => {
    setToggleModal(true);

    setImgFile(e.target.files[0])
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setSelectedFile(objectUrl)
    try {
      if (!selectedFile) return;

    } catch (e: any) {

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
          <Image src={selectedFile ? selectedFile : svg} alt={'profile photo'} width={46} height={46} />
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
              <Image src={selectedFile ? selectedFile : svg} alt={'profile photo'} width={46} height={46} />
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
                <Image src={selectedFile as string} alt={'profile photo'} width={46} height={46} />
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
