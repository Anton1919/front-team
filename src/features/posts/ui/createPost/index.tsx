import { FC } from 'react'

import Image from 'next/image'

import s from './CreatePost.module.scss'

import createSvg from '@/common/assets/icons/create.svg'
import { ModalBase } from '@/common/components/modalWindow/layouts/ModalBase'
import { useModal } from '@/common/components/modalWindow/useModal'
import { selectPhotoUrls, useCreatePostStore } from '@/features/posts/createPostStore'
import { SelectPhoto } from '@/features/posts/ui/createPost/selectPhoto'
import { CreatePostSteps } from '@/features/posts/ui/createPost/steps'

export const CreatePost: FC = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const urlsPhoto = useCreatePostStore(selectPhotoUrls)

  return (
    <>
      <div className={s.link} onClick={openModal} aria-hidden>
        <Image src={createSvg} alt="Create out icon" />
        <span>Create</span>
      </div>

      <ModalBase
        isHeaderHidden={!!urlsPhoto.length}
        isOpen={isOpen}
        closeModal={closeModal}
        title="Add post"
      >
        {!urlsPhoto.length && <SelectPhoto />}
        {urlsPhoto.length ? <CreatePostSteps closeModal={closeModal} /> : null}
      </ModalBase>
    </>
  )
}
