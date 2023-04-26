import { FC } from 'react'

import { Button } from '@/common/components/button/Button'
import { useDeletePost } from '@/features/posts/hooks/useDeletePost'

type PropsType = {
  id: number
  closeModal: () => void
}

const DeletePost: FC<PropsType> = ({ id, closeModal }) => {
  const { mutate: deletePost, isLoading, isError, error } = useDeletePost()
  const onClickHandler = (): any => {
    deletePost(id)
    closeModal()
  }

  if (isError) return <div>{error?.response?.data.message}</div>

  return (
    <div>
      <Button
        disabled={isLoading}
        buttonHandler={onClickHandler}
        variant="transparent"
        buttonName="Delete post"
      />
    </div>
  )
}

export default DeletePost
