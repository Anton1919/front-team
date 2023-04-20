import { FC } from 'react'

import s from './ToggleTheme.module.scss'

import { useTheme } from '@/common/hooks/useTheme'

export const ToggleTheme: FC = () => {
  const toggleTheme = useTheme()

  return <button type="button" className={s.toggleTheme} onClick={toggleTheme} />
}
