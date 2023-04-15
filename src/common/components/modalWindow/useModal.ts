import { useState } from 'react';

export const useModal: UseModalType = (defaultState = false) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return { isOpen, openModal, closeModal };
};

type UseModalType = (defaultState?: boolean) => {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}
