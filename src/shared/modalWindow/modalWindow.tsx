import React, { FC, ReactNode } from 'react';

import Image from 'next/image';

import closeIcon from '../../assets/icons/close.svg'

import s from './modalWindow.module.scss'

type ModalWindowProps = {
    isActive: boolean
    setIsActive: (value: boolean) => void
    title: string
    children: ReactNode
}

const ModalWindow: FC<ModalWindowProps> = ({ isActive, setIsActive, children, title }) => {
  const closeModalHandler = () => {
    setIsActive(false)
  }
  return (<>
    {isActive ? <div className={s.modalBlock} onClick={closeModalHandler}>
      <div className={s.modalContent} onClick={event => event.stopPropagation()}>
        <div className={s.title}>
          {title}
          <Image src={closeIcon} alt={'close'} className={s.closeModal} onClick={closeModalHandler}/>
        </div>
        <div className={s.children}>
          {children}
        </div>
      </div>
    </div> : null}
  </>
  );
};

export default ModalWindow;