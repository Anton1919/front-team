import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

import closeIcon from '../../assets/icons/close.svg';

import s from './modalWindow.module.scss';

type ModalWindowProps = {
    isOpen: boolean;
    title: string;
    setIsOpen: (value: boolean) => void;
    children: ReactNode;
    clearStateInProfilePhoto?: () => void;
};

export const ModalWindow: FC<ModalWindowProps> = ({
  clearStateInProfilePhoto,
  isOpen,
  setIsOpen,
  children,
  title,
}) => {
  const closeModalHandler = () => {
    setIsOpen(!isOpen);
    clearStateInProfilePhoto?.();
  };

  return (
    <>
      {isOpen ? (
        <div className={s.modalBlock} onClick={closeModalHandler}>
          <div
            className={s.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={s.title}>
              {title}
              <Image
                src={closeIcon}
                alt={'close'}
                className={s.closeModal}
                onClick={closeModalHandler}
              />
            </div>
            <div className={s.children}>{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
