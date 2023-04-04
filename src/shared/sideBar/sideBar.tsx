import React from 'react';

import { SharedLink } from '@/shared/sideBar/link/link';

import { linksData } from '@/shared/sideBar/linksData';

import style from './SideBar.module.scss'

const SideBar = () => {
 
  return (
    <div className={style.sideBarBlock}>

      {linksData.map(l => <SharedLink key={l.path} text={l.title} href={l.path} icon={l.icon}/>)}

      {/*<div className={style.home}>*/}
      {/*  <SharedLink href={'/bla'} text={'Home'} icon={homeI}/>*/}
      {/*</div>*/}
      {/*<div className={style.create}>*/}
      {/*  <SharedLink href={'/bla1'} text={'Create'} icon={createI}/>*/}
      {/*</div>*/}
      {/*<div className={style.profile}>*/}
      {/*  <SharedLink href={'/bla2'} text={'My profile'} icon={MyProfileI}/>*/}
      {/*</div>*/}
      {/*<div className={style.statistics}>*/}
      {/*  <SharedLink href={'/bla3'} text={'Statistics'} icon={statisticsI}/>*/}
      {/*</div>*/}
      {/*<div className={style.favorites}>*/}
      {/*  <SharedLink href={'/bla4'} text={'Favorites'} icon={FavoritesI}/>*/}
      {/*</div>*/}
      {/*<div className={style.logOut}>*/}
      {/*  <SharedLink href={'/bla5'} text={'Log Out'} icon={logOutI}/>*/}
      {/*</div>*/}
    </div>
  );
};

export default SideBar;