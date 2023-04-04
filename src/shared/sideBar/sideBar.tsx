import React from 'react';

import { SharedLink } from '@/shared/sideBar/link/link';

import homeI from '../../assets/icons/home.svg';
import FavoritesI from '../../assets/icons/favorites.svg';
import createI from '../../assets/icons/create.svg';
import logOutI from '../../assets/icons/logOut.svg';
import MyProfileI from '../../assets/icons/myProfile.svg';
import statisticsI from '../../assets/icons/statistics.svg';

import style from './SideBar.module.scss'

const SideBar = () => {

  const homeIcon = homeI
  const favoritesIcon = FavoritesI
  const createIcon = createI
  const logOutIcon = logOutI
  const myProfileIcon = MyProfileI
  const statisticsIcon = statisticsI

  return (
    <div className={style.sideBarBlock}>
      <div className={style.home}>
        <SharedLink href={'/bla'} text={'Hoame'} icon={homeIcon}/>
      </div>
      <div className={style.create}>
        <SharedLink href={'/bla1'} text={'Create'} icon={createIcon}/>
      </div>
      <div className={style.profile}>
        <SharedLink href={'/bla2'} text={'My profile'} icon={myProfileIcon}/>
      </div>
      <div className={style.statistics}>
        <SharedLink href={'/bla3'} text={'Statistics'} icon={statisticsIcon}/>
      </div>
      <div className={style.favorites}>
        <SharedLink href={'/bla4'} text={'Favorites'} icon={favoritesIcon}/>
      </div>
      <div className={style.logOut}>
        <SharedLink href={'/bla5'} text={'Log Out'} icon={logOutIcon}/>
      </div>
    </div>
  );
};

export default SideBar;