import React, { ChangeEvent, FC, useState } from 'react';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import svg from '@/features/account/ui/profile-settings/profile-photo/image.svg';
import { Button } from '@/common/components/button/Button';
import { useModal } from '@/common/components/modalWindow/useModal';

import s from './AddPostPhoto.module.scss';

type PropsType={
  setImgFile: (img: File | undefined) => void
  imgFile:File
}

const AddPostPhoto:FC<PropsType> = ({ setImgFile  }) => {
  const { closeModal } = useModal();
  const [modalPhoto, setModalPhoto] = useState([]);
  const [file, setFile] = useState<File | undefined>();
  const [toggleModal, setToggleModal] = useState(false);

  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    setToggleModal(true);
    if (e.target.files && e.target.files.length) {
      const resultPhoto = []
      const resultFiels = []
      for (const file of e.target.files) {
        const objectUrl = URL.createObjectURL(file as File);
        resultPhoto.push(objectUrl)
        resultFiels.push(file as File)
      }

      setModalPhoto(resultPhoto);
      setFile(resultFiels)
      // setFile(e.target?.files[0]);
    }
  };
  const handleSave = () => {
    if (file) {
      // const objectUrl = URL.createObjectURL(file);
      // setAvatarURL(objectUrl);
      setImgFile(file);
    }
    setToggleModal(false);
    closeModal();
  };

  return (
    <div>
      {!toggleModal ? (
        <>
          <div className={s.modalPhoto}>
            <Swiper>
              <SwiperSlide>
                {  modalPhoto.map((file, index) => {
                  return <Image key={index} src={file ? file :svg} alt={'my-profile photo'} width={400} height={400} />
                })}
              </SwiperSlide>
            </Swiper>
           
          </div>
          <label className={s.selectPhotoFromComputer}>
            <input type="file" multiple={true} onChange={onPhotoSelected} />
                      Select from computer
          </label>
        </>
      ) : (
        <>
          <div className={s.modalSave}>
            <div className={s.modalImage}>
              {
                modalPhoto.map((file, index) => {
                  return  <Image
                    key={index}
                    className={s.img2}
                    src={file ? file : svg}
                    alt={'my-profile photo'}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                })
              }
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