import { FC, ReactNode } from 'react'

import Image from 'next/image'

import s from './modalWindow.module.scss'

import closeIcon from '@/common/assets/icons/close.svg'

type ModalWindowProps = {
  isOpen: boolean
  title: string
  setIsOpen: (value: boolean) => void
  children: ReactNode
  clearStateInProfilePhoto?: () => void
}

export const ModalWindow: FC<ModalWindowProps> = ({
  clearStateInProfilePhoto,
  isOpen,
  setIsOpen,
  children,
  title,
}) => {
  const closeModalHandler = (): void => {
    setIsOpen(!isOpen)
    clearStateInProfilePhoto?.()
  }

  return isOpen ? (
    <div className={s.modalBlock} onClick={closeModalHandler} aria-hidden>
      <div className={s.modalContent} onClick={event => event.stopPropagation()} aria-hidden>
        <div className={s.title}>
          {title}
          <Image src={closeIcon} alt="close" className={s.closeModal} onClick={closeModalHandler} />
        </div>
        <div className={s.children}>{children}</div>
      </div>
    </div>
  ) : null
}
