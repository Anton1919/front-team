import { FC, ReactNode } from 'react'

import Image from 'next/image'

import s from './ModalBase.module.scss'

import closeIcon from '@/common/assets/icons/close.svg'
import { ModalOverlay } from '@/common/components/modalWindow/modalOverlay'

export type BaseModalProps = {
  title?: string
  children: ReactNode
  isOpen: boolean
  closeModal: () => void
}
export const ModalBase: FC<BaseModalProps> = ({ title, children, closeModal, isOpen }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClose={closeModal}>
      <div className={s.modalContent}>
        <div className={s.title}>
          {title}
          <Image src={closeIcon} alt="close" className={s.closeModal} onClick={closeModal} />
        </div>
        <div className={s.children}>{children}</div>
      </div>
    </ModalOverlay>
  )
}
