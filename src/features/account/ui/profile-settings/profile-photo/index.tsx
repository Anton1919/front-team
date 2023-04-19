import { ChangeEventHandler, FC, useEffect, useState } from 'react'

import Image from 'next/image'

import deleteSvg from './delete.svg'
import svg from './image.svg'
import s from './ProfilePhoto.module.scss'

import { Button } from '@/common/components/button/Button'
import { ModalLayout } from '@/common/components/modalWindow/modalLayout'
import { useModal } from '@/common/components/modalWindow/useModal'
import { useGetProfile } from '@/features/account/hooks/useGetProfile'

type PropsType = {
  setImgFile: (img: File | undefined) => void
}

const ProfilePhoto: FC<PropsType> = ({ setImgFile }) => {
  const { data } = useGetProfile()
  const { isOpen, openModal, closeModal } = useModal()
  const [toggleModal, setToggleModal] = useState(false)
  const [avatarURL, setAvatarURL] = useState<string | undefined>(data?.avatar)
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
      const objectUrl = URL.createObjectURL(file)

      setAvatarURL(objectUrl)
      setImgFile(file)
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
    setAvatarURL(undefined)
    setFile(undefined)
    setImgFile(undefined)
  }

  useEffect(() => {
    setAvatarURL(data?.avatar)
  }, [data])

  return (
    <div className={s.wrapper}>
      <div className={s.photoWrapper}>
        <div className={avatarURL ? s.fileDataURL : s.photo}>
          <Image src={avatarURL || svg} alt="my-profile photo" width={46} height={46} />
          {avatarURL && (
            <button type="button" className={s.deletePhoto} onClick={onDeletePhotoHandler}>
              <Image src={deleteSvg} alt="delete" width={15} height={15} />
            </button>
          )}
        </div>
      </div>

      <div className={s.addPhoto}>
        <Button
          buttonName={avatarURL ? 'Change photo' : 'Add a Profile Photo'}
          variant="transparent"
          buttonHandler={openModal}
        />
      </div>

      <ModalLayout isOpen={isOpen} title="Add a Profile Photo" closeModal={closeHandler}>
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
      </ModalLayout>
    </div>
  )
}

export default ProfilePhoto
