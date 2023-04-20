import { FC } from 'react'

import Image from 'next/image'

import { Button } from '@/common/components/button/Button'
import s from '@/features/profile/ui/my-profile/DevicesTab/DeviceItem/DeviceItem.module.scss'

type PropsType = {
  title?: string
  subTitle: string
  status: string
  img: string
  address: string
  logout?: string
  active?: boolean
  button?: boolean
}

const DeviceItem: FC<PropsType> = ({
  title,
  img,
  subTitle,
  button,
  status,
  logout,
  address,
  active,
}) => {
  return (
    <div className={s.aboutDeviceBlock}>
      {title && <h3 style={{ marginTop: '20px' }}>{title}</h3>}
      <div className={s.description}>
        <Image src={img} alt="logo" width={36} height={36} />
        <div className={s.info}>
          <span>{subTitle}</span>
          <p className={s.IP}>{address}</p>
          <p className={active ? s.active : s.lastVisit}>{status}</p>
        </div>
        {logout && (
          <p className={s.logout}>
            <Image src={logout} alt="logoutSvg" width={24} height={24} />
            <p>Log Out</p>
          </p>
        )}
      </div>
      {button && (
        <div className={s.btn}>
          <Button buttonName="Terminate all other session" variant="transparent" />
        </div>
      )}
    </div>
  )
}

export default DeviceItem
