import { useEffect } from 'react'

import { selectSetTheme, selectTheme, useProfileStore } from '@/features/auth/store'

export const useTheme = (): (() => void) => {
  const theme = useProfileStore(selectTheme)
  const setTheme = useProfileStore(selectSetTheme)

  const toggle = (): void => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return toggle
}
