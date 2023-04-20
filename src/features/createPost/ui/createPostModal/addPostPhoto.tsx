import { ChangeEvent, FC, useState } from 'react'

import Image from 'next/image'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'swiper/swiper.css'
import s from './AddPostPhoto.module.scss'

import { Button } from '@/common/components/button/Button'
import { useModal } from '@/common/components/modalWindow/useModal'
import { Spinner } from '@/common/components/spinner'
import svg from '@/features/account/ui/profile-settings/profile-photo/image.svg'
import { useCreatePost } from '@/features/createPost/hooks/useCreatePost'

type PropsType = {
  closeFirstModal: () => void
}

const AddPostPhoto: FC<PropsType> = ({ closeFirstModal }) => {
  const { mutate: createPost, isLoading } = useCreatePost()

  const { closeModal } = useModal()

  const [modalPhoto, setModalPhoto] = useState<string[]>([])

  const [file, setFile] = useState<File[] | undefined>([])

  const [toggleModal, setToggleModal] = useState(false)

  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>): any => {
    setToggleModal(true)
    if (e.target?.files && e.target?.files.length) {
      const resultPhoto: string[] = []
      const resultFiles: File[] = []

      Array.from(e.target?.files).forEach(el => {
        const objectUrl = URL.createObjectURL(el)

        resultPhoto.push(objectUrl)
        resultFiles.push(el as File)
      })

      setModalPhoto(resultPhoto)
      setFile(resultFiles)
    }
  }
  const handleSave = (): void => {
    if (file) {
      setToggleModal(false)
      closeModal()
      closeFirstModal()
      const formData = new FormData()

      Object.entries(file).forEach(([key, value]) => {
        formData.append(key, value)
      })
      createPost(formData)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      {!toggleModal ? (
        <>
          <div className={s.modalPhoto} />
          <label htmlFor="Select-from-computer" className={s.selectPhotoFromComputer}>
            <input id="Select-from-computer" type="file" multiple onChange={onPhotoSelected} />
            Select from computer
          </label>
        </>
      ) : (
        <>
          <div className={s.modalSave}>
            <div className={s.modalImage}>
              <Swiper
                cssMode
                navigation
                pagination
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >
                {modalPhoto.map((photo, index) => {
                  return (
                    <SwiperSlide key={+index} className={s.img2}>
                      <Image
                        src={photo || svg}
                        alt="my-profile"
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        width={500}
                        height={500}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
          <div className={s.saveButton}>
            <Button buttonName="Save" variant="primary" buttonHandler={handleSave} />
          </div>
        </>
      )}
    </div>
  )
}

export default AddPostPhoto
