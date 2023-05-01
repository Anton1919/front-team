import { ChangeEventHandler, FC, useState } from 'react'

import Image from 'next/image'

import deleteSvg from './delete.svg'
import svg from './image.svg'
import s from './ProfilePhoto.module.scss'

import { Button } from '@/common/components/button/Button'
import { ModalBase } from '@/common/components/modalWindow/layouts/ModalBase'
import { useModal } from '@/common/components/modalWindow/useModal'
import { useGetProfile } from '@/features/profile/hooks/useGetProfile'
import { useUpdatePhoto } from '@/features/profile/hooks/useUpdatePhoto'

const ProfilePhoto: FC = () => {
  const { data } = useGetProfile()
  const { mutate: updatePhoto } = useUpdatePhoto()
  const { isOpen, openModal, closeModal } = useModal()
  const [toggleModal, setToggleModal] = useState(false)
  const [modalPhoto, setModalPhoto] = useState<string>()
  const [file, setFile] = useState<File | undefined>()

  const onPhotoSelected: ChangeEventHandler<HTMLInputElement> = e => {
    setToggleModal(true)
    if (e.target.files && e.target.files.length) {
      const objectUrl = URL.createObjectURL(e.target?.files[0] as File)

      setModalPhoto(objectUrl)
      setFile(e.target?.files[0])
    }
  }
  const handleSave = (): void => {
    if (file) {
      const formData = new FormData()

      formData.append('avatar', file)
      updatePhoto(formData)
    }

    setToggleModal(false)
    closeModal()
  }
  const closeHandler = (): void => {
    setModalPhoto(undefined)
    setToggleModal(false)
    closeModal()
  }

  const onDeletePhotoHandler = (): void => {
    updatePhoto('')
  }

  const avatar = data?.avatar[1].key

  return (
    <div className={s.wrapper}>
      <div className={s.photoWrapper}>
        <div className={data?.avatar ? s.fileDataURL : s.photo}>
          <Image src={avatar || svg} alt="my-profile photo" width={300} height={300} />
          {data?.avatar && (
            <button type="button" className={s.deletePhoto} onClick={onDeletePhotoHandler}>
              <Image src={deleteSvg} alt="delete" width={15} height={15} />
            </button>
          )}
        </div>
      </div>

      <div className={s.addPhoto}>
        <Button
          buttonName={data?.avatar ? 'Change photo' : 'Add a Profile Photo'}
          variant="transparent"
          buttonHandler={openModal}
        />
      </div>

      <ModalBase isOpen={isOpen} title="Add a Profile Photo" closeModal={closeHandler}>
        {!toggleModal ? (
          <>
            <div className={s.modalPhoto}>
              <Image src={svg} alt="my-profile photo" width={46} height={46} />
            </div>
            <label htmlFor="select-from-computer" className={s.selectPhotoFromComputer}>
              <input id="select-from-computer" type="file" onChange={onPhotoSelected} />
              Select from computer
            </label>
          </>
        ) : (
          <>
            <div className={s.modalSave}>
              <Image
                className={s.img1}
                src={modalPhoto || svg}
                alt="my-profile photo"
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              <div className={s.modalImage}>
                <Image
                  className={s.img2}
                  src={modalPhoto || svg}
                  alt="my-profile photo"
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
            </div>
            <div className={s.saveButton}>
              <Button buttonName="Save" variant="primary" buttonHandler={handleSave} />
            </div>
          </>
        )}
      </ModalBase>
    </div>
  )
}

export default ProfilePhoto
