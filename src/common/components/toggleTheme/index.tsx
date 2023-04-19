import React from 'react';

import { useTheme } from '@/common/hooks/useTheme';

import s from './ToggleTheme.module.scss'

export const ToggleTheme = () => {
  const toggleTheme = useTheme();
  return (
    <button className={s.toggleTheme} onClick={toggleTheme}/>
  );
};
