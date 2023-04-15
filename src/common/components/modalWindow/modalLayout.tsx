import React, { FC, ReactNode } from 'react';

import Image from 'next/image';

import { ModalOverlay } from '@/shared/modalWindow/modalOverlay';
import s from '@/shared/modalWindow/modalWindow.module.scss';
import closeIcon from '@/assets/icons/close.svg';

type PropsType = {
  title: string
  children: ReactNode
  isOpen: boolean
  closeModal: () => void
}

export const ModalLayout: FC<PropsType> = ({ title, children, closeModal, isOpen }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClose={closeModal}>
      <div
        className={s.modalContent}
      >
        <div className={s.title}>
          {title}
          <Image
            src={closeIcon}
            alt={'close'}
            className={s.closeModal}
            onClick={closeModal}
          />
        </div>
        <div className={s.children}>{children}</div>
      </div>
    </ModalOverlay>
  )
}
