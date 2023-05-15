import { FC } from 'react'

import Image from 'next/image'

import s from './Description.module.scss'

import { Button } from '@/common/components/button/Button'
import { Textarea } from '@/common/components/textarea/Textarea'
import {
  selectDescription,
  selectPhotoUrls,
  selectSetDescription,
  usePostStore,
} from '@/features/posts/store'

type Props = {
  changePost?: () => void
}

export const DescriptionStep: FC<Props> = ({ changePost }) => {
  const photo = usePostStore(selectPhotoUrls)[0]
  const setDescription = usePostStore(selectSetDescription)
  const description = usePostStore(selectDescription)

  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <Image src={photo} alt="photo" width={900} height={500} />
      </div>
      <div className={s.info}>
        <div>Add publication descriptions</div>
        <Textarea
          value={description}
          className={s.textarea}
          placeholder="description"
          name="post-description"
          onChange={e => setDescription(e.target.value)}
        />
        {changePost ? (
          <div className={s.save}>
            <Button buttonHandler={changePost} buttonName="Save changes" />
          </div>
        ) : null}
      </div>
    </div>
  )
}
