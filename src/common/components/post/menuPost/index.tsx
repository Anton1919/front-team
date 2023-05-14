import { FC, useState } from 'react'

import { Dropdown } from '@/common/components/dropdown'
import { DropdownItem } from '@/common/components/dropdown/dropdownItem'
import { useModal } from '@/common/components/modalWindow/useModal'
import { useDeletePost } from '@/features/posts/hooks/useDeletePost'
import { selectCurrentPostID, usePostStore } from '@/features/posts/store'
import { ChangePost } from '@/features/posts/ui/changePost'

type Props = {
  closeModal: () => void
}

export const MenuPost: FC<Props> = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isOpen: modalOpen, openModal, closeModal: closeOpenedModal } = useModal()

  const postID = usePostStore(selectCurrentPostID)
  const { mutateAsync: removePost } = useDeletePost()

  const deletePost = async () => {
    setIsOpen(false)
    await removePost(postID)
    closeModal()
  }

  const openEditPost = () => {
    openModal()
    setIsOpen(false)
  }

  return (
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
      <DropdownItem onClick={openEditPost}>
        Edit post <ChangePost postID={postID} isOpen={modalOpen} close={closeOpenedModal} />
      </DropdownItem>
      <DropdownItem onClick={deletePost}>Delete post</DropdownItem>
    </Dropdown>
  )
}
