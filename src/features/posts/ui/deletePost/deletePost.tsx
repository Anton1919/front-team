import { FC } from 'react'

import { Button } from '@/common/components/button/Button'

type PropsType = {
  // id: number
}

const DeletePost: FC<PropsType> = () => {
  const onClickHandler = (): any => {}

  return (
    <div style={{ position: 'relative', top: '10px', left: '860px' }}>
      <Button buttonHandler={onClickHandler} variant="transparent" buttonName="Delete post" />
    </div>
  )
}

export default DeletePost
