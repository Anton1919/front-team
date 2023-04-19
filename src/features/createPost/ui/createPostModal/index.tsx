import { FC } from 'react'

import Image from 'next/image'

import createSvg from '@/common/assets/icons/create.svg'
import s from '@/common/components/logOut/LogOut.module.scss'
import { ModalLayout } from '@/common/components/modalWindow/modalLayout'
import { useModal } from '@/common/components/modalWindow/useModal'

const CreatePostModal: FC = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <div className={s.logOut} onClick={openModal} aria-hidden>
        <Image src={createSvg} alt="Create out icon" />
        <span>CREATEEEEE</span>
      </div>
      <ModalLayout isOpen={isOpen} closeModal={closeModal} title="Add Photo">
        k
      </ModalLayout>
    </>
  )
}

export default CreatePostModal
