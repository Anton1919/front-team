import { FC, useRef } from 'react'

import classNames from 'classnames'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './PostSlider.module.scss'

import { ArrowButton } from '@/common/components/button/arrowButton'
import { ImgSlider } from '@/common/components/slider/imgSlider'
import { PostType } from '@/features/posts/types'
import { PostHeader } from '@/features/posts/ui/postHeader'

type Props = {
  initSlide?: number
  posts: PostType[]
}
export const PostSlider: FC<Props> = ({ initSlide = 0, posts }) => {
  const swiperRef = useRef<any>(null)

  return (
    <div className={s.wrapper}>
      <ArrowButton
        className={classNames(s.arrow, s.prev)}
        direction="prev"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      />
      <ArrowButton
        className={classNames(s.arrow, s.next)}
        direction="next"
        onClick={() => swiperRef.current.swiper.slideNext()}
      />
      <Swiper
        spaceBetween={30}
        initialSlide={initSlide}
        className={s.slider}
        ref={swiperRef}
        modules={[Navigation]}
      >
        {posts.map(post => {
          return (
            <SwiperSlide key={post.id}>
              <div className={s.postWrapper}>
                <ImgSlider classname={s.img} urls={post.postPhotos} />
                <div className={s.textContent}>
                  <PostHeader title="Post 1" />
                  About me: Давно выяснено, что при оценке дизайна и композиции читаемый текст
                  мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более
                  или менее стандартное
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
