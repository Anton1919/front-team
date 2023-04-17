import React from 'react';

import Image from 'next/image';

import s from '@/common/components/logOut/LogOut.module.scss';
import createSvg from '@/common/assets/icons/create.svg';
import { ModalLayout } from '@/common/components/modalWindow/modalLayout';
import { useModal } from '@/common/components/modalWindow/useModal';

const CreatePostModal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className={s.logOut} onClick={openModal}>
        <Image src={createSvg} alt={'Create out icon'} />
        <span>CREATEEEEE</span>
      </div>
      <ModalLayout isOpen={isOpen} closeModal={closeModal} title={'Add Photo'}>
          k
      </ModalLayout>
    </>
  );
};

export default CreatePostModal;