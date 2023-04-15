import React, { FC, ReactNode } from 'react';

import Image from 'next/image';

import closeIcon from 'src/common/assets/icons/close.svg';

import { ModalOverlay } from '@/common/components/modalWindow/modalOverlay';

import s from './modalWindow.module.scss';

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
