import { FC } from 'react'

import { Button } from '@/common/components/button/Button'
import { useDeletePost } from '@/features/posts/hooks/useDeletePost'

type PropsType = {
  id: number
  closeModal: () => void
}

const DeletePost: FC<PropsType> = ({ id, closeModal }) => {
  const { mutate: deletePost } = useDeletePost()

  const onClickHandler = (): any => {
    deletePost(id)
    closeModal()
  }

  return (
    <div style={{ position: 'relative', top: '10px', left: '860px' }}>
      <Button buttonHandler={onClickHandler} variant="transparent" buttonName="Delete post" />
    </div>
  )
}

export default DeletePost
