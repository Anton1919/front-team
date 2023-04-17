import React from 'react';

import { LogOut } from '@/common/components/logOut';

import style from './SideBar.module.scss'
import { SharedLink } from './link/link';
import { linksData } from './linksData';

const SideBar = () => {

  return (

    <div className={style.sideBarBlock}>

      {linksData.map(l => <SharedLink key={l.path} text={l.title} href={l.path}
        icon={l.icon}/>)}
      <LogOut/>
    </div>
  );
};

export default SideBar;