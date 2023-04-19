import React, {  useState } from 'react';

import Image from 'next/image';

import style from '@/common/components/logOut/LogOut.module.scss';
import createSvg from '@/common/assets/icons/create.svg';
import { ModalLayout } from '@/common/components/modalWindow/modalLayout';
import { useModal } from '@/common/components/modalWindow/useModal';
import AddPostPhoto from '@/features/createPost/ui/createPostModal/addPostPhoto';

const CreatePostModal = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [imgFile, setImgFile] = useState<File>();
  return (
    <>
      <div className={style.logOut} onClick={openModal}>
        <Image src={createSvg} alt={'Create out icon'} />
        <span>CREATEEEEE</span>
      </div>
      <ModalLayout isOpen={isOpen} closeModal={closeModal} title={'Add Photo'}>
        <AddPostPhoto closeFirstModal={closeModal} setImgFile={setImgFile} imgFile={imgFile}/>
      </ModalLayout>
    </>
  );
};

export default CreatePostModal;