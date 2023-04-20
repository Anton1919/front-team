import { FC } from 'react'
import React, {  useState } from 'react';

import Image from 'next/image'

import style from '@/common/components/logOut/LogOut.module.scss';
import AddPostPhoto from '@/features/createPost/ui/createPostModal/addPostPhoto';
import createSvg from '@/common/assets/icons/create.svg'
import s from '@/common/components/logOut/LogOut.module.scss'
import { ModalLayout } from '@/common/components/modalWindow/modalLayout'
import { useModal } from '@/common/components/modalWindow/useModal'

const CreatePostModal = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [ , setImgFile] = useState<File>();
  return (
    <>
      <div className={s.logOut} onClick={openModal}>
        <Image src={createSvg} alt={'Create out icon'} />
        <span>CREATEEEEE</span>
      </div>
      <ModalLayout isOpen={isOpen} closeModal={closeModal} title={'Add Photo'}>
        <AddPostPhoto closeFirstModal={closeModal} setImgFile={setImgFile} />
      </ModalLayout>
    </>
  )
}

export default CreatePostModal;