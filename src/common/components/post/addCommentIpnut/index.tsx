import { ChangeEvent, FC, useState } from 'react'

import s from './AddComment.module.scss'

type Props = {
  addComment: (text: string) => void
}
export const AddCommentIpnut: FC<Props> = ({ addComment }) => {
  const [value, setValue] = useState<string>('')

  const publishHandler = (): void => addComment(value)

  return (
    <div className={s.addComment}>
      <input
        placeholder="Add a comment..."
        className={s.input}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        type="text"
      />
      <button className={s.publish} onClick={publishHandler} type="button">
        Publish
      </button>
    </div>
  )
}
