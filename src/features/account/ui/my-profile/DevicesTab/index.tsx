import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image'

import { Button } from '@/shared/button/Button';

import s from './DevicesTab.module.scss'

import chromeSvg from './icons/chrome.svg'
import phoneSvg from './icons/phone.svg'
import macSvg from './icons/mac.svg'
import logoutSvg from './icons/log-out.svg'

const DevicesTab: NextPage = () => {
  return (
    <div className={s.container}>
      <div className={s.aboutDeviceBlock}>
        <h3>This devices</h3>
        <div className={s.description}>
          <Image src={chromeSvg} alt={'logo'} width={36} height={36}/>
          <div className={s.info}>
            <span>Chrome</span>
            <p className={s.IP}>IP: 22 - 2345 </p>
            <p className={s.active}>Online</p>
          </div>
        </div>
        <div className={s.btn}>
          <Button button_name={'Terminate all other session'} variant={'transparent'}/>
        </div>
      </div>

      <div className={s.activeSessionsBlock}>
        <h3>Active sessions</h3>
        <div className={s.description}>
          <Image src={macSvg} alt={'logo'} width={36} height={36}/>
          <div className={s.info}>
            <span>Apple iMac 27</span>
            <p className={s.IP}>IP: 22 - 2345 </p>
            <p className={s.lastVisit}>Last visit: 22.09.2022</p>
          </div>
          <a className={s.logout}>
            <Image src={logoutSvg} alt={'logoutSvg'} width={24} height={24}/>
            <p>Log Out</p>
          </a>
        </div>

        <div className={s.description}>
          <Image src={phoneSvg} alt={'logo'} width={36} height={36}/>
          <div className={s.info}>
            <span>Iphone 14 Pro Max</span>
            <p className={s.IP}>IP: 22 - 2345 </p>
            <p className={s.lastVisit}>Last visit: 22.09.2022</p>
          </div>
          <a className={s.logout}>
            <Image src={logoutSvg} alt={'logoutSvg'} width={24} height={24}/>
            <p>Log Out</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevicesTab;