import { NextPage } from 'next'

import s from './DevicesTab.module.scss'
import chromeSvg from './icons/chrome.svg'
import logoutSvg from './icons/log-out.svg'
import macSvg from './icons/mac.svg'
import phoneSvg from './icons/phone.svg'

import DeviceItem from '@/features/account/ui/my-profile/DevicesTab/DeviceItem'

const DevicesTab: NextPage = () => {
  return (
    <div className={s.container}>
      <DeviceItem
        title="This devices"
        active
        img={chromeSvg}
        address="IP: 22 - 2345"
        subTitle="Chrome"
        status="Online"
        button
      />
      <DeviceItem
        title="Active sessions"
        img={macSvg}
        address="IP: 22 - 2345"
        subTitle="Apple iMac 27"
        logout={logoutSvg}
        status="Last visit: 22.09.2022"
      />
      <DeviceItem
        img={phoneSvg}
        address="IP: 22 - 2345"
        subTitle="Iphone 14 Pro Max"
        logout={logoutSvg}
        status="Last visit: 22.09.2022"
      />
    </div>
  )
}

export default DevicesTab
