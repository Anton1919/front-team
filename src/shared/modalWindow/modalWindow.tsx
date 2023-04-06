import React, { FC, ReactNode, useState } from 'react';

import Image from 'next/image';

import closeIcon from '../../assets/icons/close.svg'

import s from './modalWindow.module.scss'

type ModalWindowProps = {
    isActive: boolean
    title: string
    children: ReactNode
}

export const ModalWindow: FC<ModalWindowProps> = ({ isActive, children, title }) => {

  const [isOpened, setIsOpened] = useState<boolean>(isActive)

  const closeModalHandler = () => setIsOpened(false)

  return (<>
    {isOpened ? <div className={s.modalBlock} onClick={closeModalHandler}>
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
