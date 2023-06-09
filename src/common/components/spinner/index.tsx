import { FC } from 'react'

import { ClipLoader } from 'react-spinners'

import s from './Spinner.module.scss'

export const Spinner: FC = () => {
  return (
    <div className={s.spinnerWrapper}>
      <ClipLoader color="#36d7b7" size={100} />
    </div>
  )
}
