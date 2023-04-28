import { ChangeEvent, FC } from 'react'

import s from './SelectPhoto.module.scss'

import {
  selectSetFormData,
  selectSetPhotoUrls,
  useCreatePostStore,
} from '@/features/posts/createPostStore'

export const SelectPhoto: FC = () => {
  const setPhotoUrls = useCreatePostStore(selectSetPhotoUrls)
  const setFormData = useCreatePostStore(selectSetFormData)

  const onChangeSelect = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target?.files
    const urls: string[] = []

    if (files && files.length) {
      Array.from(files).forEach(file => {
        urls.push(URL.createObjectURL(file))
        setFormData('postPhoto', file)
      })
      setPhotoUrls(urls)
    }
  }

  return (
    <label className={s.selectPhoto} htmlFor="select-photo">
      <div className={s.area}>Drag and drop a photo, or select from your computer</div>
      <input
        id="select-photo"
        type="file"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={onChangeSelect}
      />
    </label>
  )
}
