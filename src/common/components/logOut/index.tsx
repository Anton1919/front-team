import { FC } from 'react'

import Image from 'next/image'

import s from './LogOut.module.scss'

import logOutSvg from '@/common/assets/icons/logOut.svg'
import { Button } from '@/common/components/button/Button'
import { ModalBase } from '@/common/components/modalWindow/layouts/ModalBase'
import { useModal } from '@/common/components/modalWindow/useModal'
import { useLogout } from '@/features/auth/hooks/logout/useLogout'
import { selectEmail, useProfileStore } from '@/features/auth/store'

export const LogOut: FC = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const email = useProfileStore(selectEmail)

  const { mutateAsync: logout } = useLogout()

  const logOutHandler = async (): Promise<void> => {
    try {
      await logout({})
      closeModal()
    } catch (e) {
      /* empty */
    }
  }

  return (
    <>
      <div className={s.logOut} onClick={openModal} aria-hidden>
        <Image className={s.logOutIcon} src={logOutSvg} alt="log out icon" />
        <span>Log out</span>
      </div>
      <ModalBase isOpen={isOpen} closeModal={closeModal} title="Log out">
        <div>
          Are you really want to log out of your account {email} ?
          <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px' }}>
            <Button buttonName="Yes" variant="transparent" buttonHandler={logOutHandler} />
            <Button buttonName="No" buttonHandler={closeModal} />
          </div>
        </div>
      </ModalBase>
    </>
  )
}
