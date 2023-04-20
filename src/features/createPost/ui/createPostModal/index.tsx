import { useState } from 'react'

import Image from 'next/image'

import createSvg from '@/common/assets/icons/create.svg'
import s from '@/common/components/logOut/LogOut.module.scss'
import { ModalLayout } from '@/common/components/modalWindow/modalLayout'
import { useModal } from '@/common/components/modalWindow/useModal'
import AddPostPhoto from '@/features/createPost/ui/createPostModal/addPostPhoto'

const CreatePostModal = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const [, setImgFile] = useState<File>()

  return (
    <>
      <div className={s.logOut} onClick={openModal}>
        <Image src={createSvg} alt="Create out icon" />
        <span>Create</span>
      </div>
      <ModalLayout isOpen={isOpen} closeModal={closeModal} title="Add Photo">
        <AddPostPhoto closeFirstModal={closeModal} setImgFile={setImgFile} />
      </ModalLayout>
    </>
  )
}

export default CreatePostModal
