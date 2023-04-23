import { FC, ReactNode } from 'react'

import classNames from 'classnames'
import Image from 'next/image'

import s from './modalWindow.module.scss'

import closeIcon from '@/common/assets/icons/close.svg'
import { ModalOverlay } from '@/common/components/modalWindow/modalOverlay'

type PropsType = {
  title: string
  children: ReactNode
  isOpen: boolean
  closeModal: () => void
  classNameChildren?: string
}

export const ModalLayout: FC<PropsType> = ({
  title,
  children,
  closeModal,
  isOpen,
  classNameChildren,
}) => {
  return (
    <ModalOverlay isOpen={isOpen} onClose={closeModal}>
      <div className={s.modalContent}>
        <div className={s.title}>
          {title}
          <Image src={closeIcon} alt="close" className={s.closeModal} onClick={closeModal} />
        </div>
        <div className={classNames(s.children, classNameChildren)}>{children}</div>
      </div>
    </ModalOverlay>
  )
}
