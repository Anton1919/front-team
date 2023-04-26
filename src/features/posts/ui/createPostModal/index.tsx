import { FC } from 'react'

import Image from 'next/image'

import createSvg from '@/common/assets/icons/create.svg'
import { ModalBase } from '@/common/components/modalWindow/layouts/ModalBase'
import { useModal } from '@/common/components/modalWindow/useModal'
import { AddPostPhoto } from '@/features/posts/ui/createPostModal/addPostPhoto'

export const CreatePostModal: FC = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <div onClick={openModal} aria-hidden>
        <Image src={createSvg} alt="Create out icon" />
        <span>Create</span>
      </div>
      <ModalBase isOpen={isOpen} closeModal={closeModal} title="Add Photo">
        <AddPostPhoto closeFirstModal={closeModal} />
      </ModalBase>
    </>
  )
}
