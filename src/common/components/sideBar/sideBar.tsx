import React from 'react';

import { LogOut } from '@/common/components/logOut';

import CreatePostModal from '@/features/createPost/ui/createPostModal';

import style from './SideBar.module.scss'
import { SharedLink } from './link/link';
import { linksData } from './linksData';

const SideBar = () => {

  return (

    <div className={style.sideBarBlock}>

      {linksData.slice(0,1).map(l => <SharedLink key={l.path} text={l.title} href={l.path}
        icon={l.icon}/>)}
      <CreatePostModal/>
      {linksData.slice(2,5).map(l => <SharedLink key={l.path} text={l.title} href={l.path}
        icon={l.icon}/>)}

      <LogOut/>
    </div>
  );
};

export default SideBar;