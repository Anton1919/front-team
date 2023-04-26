import { FC } from 'react'

import { EffectFade, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './Steps.module.scss'

import { ImgSlider } from '@/common/components/slider/imgSlider'

type Props = {
  photos: string[]
}
export const CreatePostSteps: FC<Props> = ({ photos }) => {
  return (
    <Swiper
      centeredSlides
      navigation
      pagination
      modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectFade]}
    >
      <SwiperSlide className={s.step}>
        <ImgSlider urls={photos} />
      </SwiperSlide>
    </Swiper>
  )
}
