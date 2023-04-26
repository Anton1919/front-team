import { FC } from 'react'

import { Button } from '@/common/components/button/Button'
import { useDeletePost } from '@/features/posts/hooks/useDeletePost'
import { selectSetState, usePostsStore } from '@/features/posts/store'

type PropsType = {
  id: number
  closeModal: () => void
}

const DeletePost: FC<PropsType> = ({ id, closeModal }) => {
  const setStatus = usePostsStore(selectSetState)
  const { mutate: deletePost, isLoading, isError, error } = useDeletePost()
  const onClickHandler = (): any => {
    deletePost(id)
    setStatus({ state: 'loading' })
    if (!isError) {
      closeModal()
    }
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
