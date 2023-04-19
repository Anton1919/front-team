import { FC } from 'react'

import { SharedLink } from './link/link'
import { linksData } from './linksData'
import style from './SideBar.module.scss'

import { LogOut } from '@/common/components/logOut'
import CreatePostModal from '@/features/createPost/ui/createPostModal'

const TWO = 2
const SideBar: FC = () => {
  return (
    <div className={style.sideBarBlock}>
      {linksData.slice(0, 1).map(l => (
        <SharedLink key={l.path} text={l.title} href={l.path} icon={l.icon} />
      ))}
      <CreatePostModal />
      {linksData.slice(TWO).map(l => (
        <SharedLink key={l.path} text={l.title} href={l.path} icon={l.icon} />
      ))}

      <LogOut />
    </div>
  )
}

export default SideBar
