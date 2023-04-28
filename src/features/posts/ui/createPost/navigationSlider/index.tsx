import { FC } from 'react'

import s from './NavigationSlider.module.scss'

type Props = {
  slideIndex: number
  isHidden?: boolean
  createPostHandler: () => void
  slidePrev: () => void
  slideNext: () => void
}
export const NavigationSlider: FC<Props> = ({
  slideIndex,
  createPostHandler,
  slidePrev,
  slideNext,
  isHidden = false,
}) => {
  if (isHidden) return null

  return (
    <div className={s.navigation}>
      <div className={s.back} onClick={slidePrev} aria-hidden>
        back
      </div>
      {slideIndex === 0 ? (
        <button className={s.next} onClick={slideNext} type="button">
          Next
        </button>
      ) : (
        <button className={s.publish} type="button" onClick={createPostHandler}>
          Publish
        </button>
      )}
    </div>
  )
}
