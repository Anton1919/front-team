import React, { useEffect } from 'react';

import { ModalLayout } from '@/common/components/modalWindow/modalLayout';
import { useModal } from '@/common/components/modalWindow/useModal';

const Index = () => {
  const { isOpen, openModal, closeModal } = useModal();
  useEffect(()=>{openModal()},[])
 
  return (
    <div>
      <ModalLayout isOpen={isOpen} closeModal={closeModal} title={'Add Photo'}>
        
      </ModalLayout>
    </div>
  );
};

export default Index;