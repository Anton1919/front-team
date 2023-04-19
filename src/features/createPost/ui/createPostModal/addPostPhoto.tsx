import React, { ChangeEvent, FC, useState } from 'react';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/swiper.css'
import svg from '@/features/account/ui/profile-settings/profile-photo/image.svg';
import { Button } from '@/common/components/button/Button';
import { useModal } from '@/common/components/modalWindow/useModal';

import { useCreatePostMutation } from '@/features/createPost/hooks/useCreatePostMutation';

import { Spinner } from '@/common/components/spinner';

import s from './AddPostPhoto.module.scss';

type PropsType={
  setImgFile: (img: File | undefined) => void
  closeFirstModal:()=>void
}

const AddPostPhoto:FC<PropsType> = ({ closeFirstModal }) => {

  const { mutate: createPost, isLoading }=useCreatePostMutation()

  const { closeModal } = useModal();

  const [modalPhoto, setModalPhoto] = useState<string[]>([]);

  const [file, setFile] = useState<File[] | undefined>([]);

  const [toggleModal, setToggleModal] = useState(false);

  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    setToggleModal(true);
    if (e.target?.files && e.target?.files.length) {
      const resultPhoto = []
      const resultFiles = []
      for (const file of e.target?.files) {
        const objectUrl = URL.createObjectURL(file as File);
        resultPhoto.push(objectUrl)
        resultFiles.push(file as File)
      }
      setModalPhoto(resultPhoto);
      setFile(resultFiles)
    }
  };
  const handleSave = () => {
    // if (file) {
    //   const objectUrl = URL.createObjectURL(file);
    //   setAvatarURL(objectUrl);
    //   setImgFile(file);
    // }
    if(file) {
      setToggleModal(false);
      closeModal();
      closeFirstModal()
      const formData = new FormData()
      Object.entries(file).forEach(([key, value]) => {
        formData.append(key, value)
      })
      createPost(formData)
    }
  };
  if(isLoading){
    return <Spinner  />
  }
  return (
    <div>
      {!toggleModal ? (
        <>
          <div className={s.modalPhoto}>
           
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
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >

                {
                  modalPhoto.map((file, index) => {
                    return  <SwiperSlide
                      key={index}
                      className={s.img2}>
                      <Image src={file ? file : svg} alt={'my-profile'} fill sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" width={500} height={500}/></SwiperSlide>
                  })
                }

              </Swiper>

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