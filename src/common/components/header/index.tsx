import { FC, PropsWithChildren } from 'react'

import style from './Header.module.scss'

import { Container } from '@/common/components/container'
import { ToggleTheme } from '@/common/components/toggleTheme'

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className={style.headerBlock}>
      <Container className={style.container} type="shared">
        <div className={style.title}>INCtagram</div>
        {children}
        <ToggleTheme />
      </Container>
    </header>
  )
}
