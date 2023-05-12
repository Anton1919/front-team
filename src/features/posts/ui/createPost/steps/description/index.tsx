import { ChangeEvent, FC } from 'react'

import Image from 'next/image'

import s from './Description.module.scss'

import { Textarea } from '@/common/components/textarea/Textarea'
import {
  selectFormData,
  selectPhotoUrls,
  selectSetDescription,
  useCreatePostStore,
} from '@/features/posts/createPostStore'

export const DescriptionStep: FC = () => {
  const photo = useCreatePostStore(selectPhotoUrls)[0]
  const description = useCreatePostStore(selectFormData).get('description')
  const setDescription = useCreatePostStore(selectSetDescription)

  const setDescriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <Image src={photo} alt="photo" width={900} height={500} />
      </div>
      <div className={s.info}>
        <div>Add publication descriptions</div>
        <Textarea
          value={description as string}
          className={s.textarea}
          placeholder="description"
          name="post-description"
          onChange={setDescriptionHandler}
        />
      </div>
    </div>
  )
}
