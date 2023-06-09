import { FC, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './PostSlider.module.scss'

import { ArrowButton } from '@/common/components/button/arrowButton'
import { AddCommentIpnut } from '@/common/components/post/addCommentIpnut'
import { PostComment } from '@/common/components/post/postComment'
import { PostDescription } from '@/common/components/post/postDescription'
import { PostHeader } from '@/common/components/post/postHeader'
import { ImgSlider } from '@/common/components/slider/imgSlider'
import { selectUsername, useProfileStore } from '@/features/auth/store'
import {
  selectSetDescription,
  selectSetPhotoUrls,
  selectSetPostID,
  usePostStore,
} from '@/features/posts/store'
import { PostType } from '@/features/posts/types'

type Props = {
  initSlide?: number
  posts: PostType[]
  closeModal: () => void
}
export const PostSlider: FC<Props> = ({ closeModal, initSlide = 0, posts }) => {
  const swiperRef = useRef<any>(null)
  const setCurrentPostID = usePostStore(selectSetPostID)
  const setPhotoUrls = usePostStore(selectSetPhotoUrls)
  const setDescription = usePostStore(selectSetDescription)
  const username = useProfileStore(selectUsername)
  const [slideIndex, setSlideIndex] = useState<number>(initSlide)

  useEffect(() => {
    setCurrentPostID(posts[slideIndex].id)
    setPhotoUrls(posts[slideIndex].postPhotos)
    setDescription(posts[slideIndex].description)

    return () => {
      setCurrentPostID(0)
      setPhotoUrls([])
      setDescription('')
    }
  }, [slideIndex])

  return (
    <div className={s.wrapper}>
      <ArrowButton
        className={classNames(s.arrow, s.prev)}
        direction="prev"
        onClick={() => swiperRef.current.swiper.slidePrev()}
        disabled={!slideIndex}
      />
      <ArrowButton
        className={classNames(s.arrow, s.next)}
        direction="next"
        onClick={() => swiperRef.current.swiper.slideNext()}
        disabled={slideIndex === posts.length - 1}
      />
      <Swiper
        spaceBetween={30}
        initialSlide={initSlide}
        className={s.slider}
        ref={swiperRef}
        modules={[Navigation]}
        onSlideChange={swiper => setSlideIndex(swiper.realIndex)}
      >
        {posts.map(post => {
          return (
            <SwiperSlide key={post.id}>
              <div className={s.postWrapper}>
                <ImgSlider classname={s.img} urls={post.postPhotos} />
                <div className={s.textContent}>
                  <PostHeader closeModal={closeModal} title={username} />
                  {post.description && (
                    <PostDescription username={username} text={post.description} />
                  )}
                  <PostComment
                    username="Username"
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
