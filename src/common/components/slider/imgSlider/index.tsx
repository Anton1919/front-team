import { FC } from 'react'

import Image from 'next/image'
import { EffectFade, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './ImgSlider.module.scss'

type Props = {
  urls: string[]
}
export const ImgSlider: FC<Props> = ({ urls }) => {
  return (
    <Swiper
      className={s.slider}
      effect="fade"
      centeredSlides
      navigation
      pagination
      modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectFade]}
    >
      {urls.map(url => (
        <SwiperSlide className={s.slide} key={url}>
          <Image src={url} alt="photo" width={490} height={600} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
