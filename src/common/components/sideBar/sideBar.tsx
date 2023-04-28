import { FC } from 'react'

import { SharedLink } from './link/link'
import { linksData } from './linksData'
import style from './SideBar.module.scss'

import { LogOut } from '@/common/components/logOut'
import { CreatePost } from '@/features/posts/ui/createPost'

const FOUR = 4
const SideBar: FC = () => {
  return (
    <div className={style.sideBarBlock}>
      {linksData.slice(0, 1).map(l => (
        <SharedLink key={l.path} text={l.title} href={l.path} icon={l.icon} />
      ))}
      <CreatePost />
      {linksData.slice(1, FOUR).map(l => (
        <SharedLink key={l.path} text={l.title} href={l.path} icon={l.icon} />
      ))}

      <LogOut />
    </div>
  )
}

export default SideBar
