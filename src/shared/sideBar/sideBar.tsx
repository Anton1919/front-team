import React from 'react';

import { SharedLink } from '@/shared/sideBar/link/link';

import { linksData } from '@/shared/sideBar/linksData';

import style from './SideBar.module.scss'

const SideBar = () => {

  return (

    <div className={style.sideBarBlock}>

      {linksData.map(l => <SharedLink key={l.path} text={l.title} href={l.path}
        icon={l.icon}/>)}

    </div>
  );
};

export default SideBar;