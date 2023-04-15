import React, { ReactElement } from 'react';
import Image from 'next/image';

import s from '@/features/account/ui/my-profile/DevicesTab/DeviceItem/DeviceItem.module.scss';
import { Button } from '@/common/components/button/Button';

type PropsType = {
    title?: string
    subTitle: string
    status: string
    img: string
    address: string
    logout?: string
    active?: boolean
    btn?: ReactElement
    button?: boolean
}

const DeviceItem = ({ title, img, subTitle , button,  status, logout , address, active }: PropsType) => {
  return (
    <div className={s.aboutDeviceBlock}>
      {title && <h3 style={{ marginTop: '20px' }}>{title}</h3>}
      <div className={s.description}>
        <Image src={img} alt={'logo'} width={36} height={36}/>
        <div className={s.info}>
          <span>{subTitle}</span>
          <p className={s.IP}>{address}</p>
          <p className={active ? s.active : s.lastVisit}>{status}</p>
        </div>
        {logout && <a className={s.logout}>
          <Image src={logout} alt={'logoutSvg'} width={24} height={24}/>
          <p>Log Out</p>
        </a>}
      </div>
      {button && <div className={s.btn}>
        <Button button_name={'Terminate all other session'} variant={'transparent'}/>
      </div>}
    </div>
  );
};

export default DeviceItem;