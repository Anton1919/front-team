import { FC, useState } from 'react'

import { Dropdown } from '@/common/components/dropdown'
import { DropdownItem } from '@/common/components/dropdown/dropdownItem'
import { ModalBase } from '@/common/components/modalWindow/layouts/ModalBase'
import { useModal } from '@/common/components/modalWindow/useModal'
import { selectCurrentPostID, useCreatePostStore } from '@/features/posts/createPostStore'
import { useDeletePost } from '@/features/posts/hooks/useDeletePost'
import { DescriptionStep } from '@/features/posts/ui/createPost/steps/description'

type Props = {
  closeModal: () => void
}

export const MenuPost: FC<Props> = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { isOpen: modalOpen, openModal, closeModal: closeOpenedModal } = useModal()

  const postID = useCreatePostStore(selectCurrentPostID)
  const { mutateAsync: removePost } = useDeletePost()

  const deletePost = async () => {
    setIsOpen(false)
    await removePost(postID)
    closeModal()
  }

  // const editPost = () => {}

  return (
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
      <DropdownItem onClick={openModal}>
        Edit post
        <ModalBase isOpen={modalOpen} closeModal={closeOpenedModal}>
          <DescriptionStep />
        </ModalBase>
      </DropdownItem>
      <DropdownItem onClick={deletePost}>Delete post</DropdownItem>
    </Dropdown>
  )
}
