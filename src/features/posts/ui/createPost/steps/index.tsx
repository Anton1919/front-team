import { FC, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import s from './Steps.module.scss'

import { ImgSlider } from '@/common/components/slider/imgSlider'
import { useCreatePost } from '@/features/posts/hooks/useCreatePost'
import {
  selectClearState,
  selectCollectFormData,
  selectFormData,
  selectPhotoUrls,
  usePostStore,
} from '@/features/posts/store'
import { NavigationSlider } from '@/features/posts/ui/createPost/navigationSlider'
import { DescriptionStep } from '@/features/posts/ui/createPost/steps/description'
import { FinalStep } from '@/features/posts/ui/createPost/steps/final'

const lastIndexSlide = 2

export const CreatePostSteps: FC = () => {
  const formData = usePostStore(selectFormData)
  const { mutateAsync: createPost, isLoading, status } = useCreatePost()

  const clearState = usePostStore(selectClearState)
  const photos = usePostStore(selectPhotoUrls)
  const collectFormData = usePostStore(selectCollectFormData)

  const swiperRef = useRef<SwiperRef | null>(null)
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const createPostHandler = (): void => {
    collectFormData()
    swiperRef.current?.swiper.slideNext()
    createPost(formData)
  }

  useEffect(() => {
    return () => {
      if (status === 'success') clearState()
    }
  }, [status])

  return (
    <>
      <NavigationSlider
        createPostHandler={createPostHandler}
        slideIndex={slideIndex}
        slideNext={() => swiperRef.current?.swiper.slideNext()}
        slidePrev={() => swiperRef.current?.swiper.slidePrev()}
        isHidden={slideIndex === lastIndexSlide}
      />
      <Swiper
        ref={swiperRef}
        className={s.steps}
        allowTouchMove={false}
        onSlideChange={swiper => setSlideIndex(swiper.realIndex)}
      >
        <SwiperSlide className={s.step}>
          <ImgSlider urls={photos} />
        </SwiperSlide>

        <SwiperSlide className={s.step}>
          <DescriptionStep changePost={createPostHandler} />
        </SwiperSlide>

        <SwiperSlide className={classNames(s.step, s.lastSlide)}>
          <FinalStep isLoading={isLoading} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
