import { FC } from 'react'

import { ModalBase } from '@/common/components/modalWindow/layouts/ModalBase'
import { useChangePost } from '@/features/posts/hooks/useChangePost'
import { selectCollectFormData, selectFormData, usePostStore } from '@/features/posts/store'
import { DescriptionStep } from '@/features/posts/ui/createPost/steps/description'

type Props = {
  postID: number
  isOpen: boolean
  close: () => void
}
export const ChangePost: FC<Props> = ({ postID, isOpen, close }) => {
  const collectFormData = usePostStore(selectCollectFormData)
  const formData = usePostStore(selectFormData)
  const { mutateAsync: editPost } = useChangePost(postID, formData)

  const changePost = async () => {
    collectFormData()
    await editPost(undefined, undefined)
    close()
  }

  return (
    <ModalBase isHeaderHidden isOpen={isOpen} closeModal={close}>
      <DescriptionStep changePost={changePost} />
    </ModalBase>
  )
}
