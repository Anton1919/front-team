import { FC } from 'react'

import s from './ModalPost.module.scss'

import { BaseModalProps } from '@/common/components/modalWindow/layouts/ModalBase'
import { ModalOverlay } from '@/common/components/modalWindow/modalOverlay'

export const ModalPost: FC<BaseModalProps> = ({ closeModal, isOpen, title, children }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClose={closeModal}>
      <div className={s.modalWrapper}>
        <div>{title}</div>
        {children}
      </div>
    </ModalOverlay>
  )
}
