import { FC, useRef } from 'react'

import classNames from 'classnames'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './PostSlider.module.scss'

import { ArrowButton } from '@/common/components/button/arrowButton'
import { AddCommentIpnut } from '@/common/components/post/addCommentIpnut'
import { PostComment } from '@/common/components/post/postComment'
import { PostDescription } from '@/common/components/post/postDescription'
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
                  <PostDescription
                    username="Arsen"
                    text='Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.'
                  />
                  <PostComment
                    username="Arsen"
                    text='Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.'
                    like={5}
                  />
                  <AddCommentIpnut addComment={() => {}} />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
