import { FC } from 'react'

import classNames from 'classnames'
import Image from 'next/image'
import { EffectFade, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './ImgSlider.module.scss'

type Props = {
  urls: string[]
  classname?: string
}
export const ImgSlider: FC<Props> = ({ urls, classname }) => {
  return (
    <Swiper
      className={classNames(s.slider, classname)}
      effect="fade"
      centeredSlides
      navigation
      pagination
      modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectFade]}
    >
      {urls.map(url => (
        <SwiperSlide className={s.slide} key={url}>
          <Image src={url} alt="photo" width={900} height={500} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
