import { FC, useRef, useState } from 'react'

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import s from './Steps.module.scss'

import { ImgSlider } from '@/common/components/slider/imgSlider'
import {
  selectClearState,
  selectFormData,
  selectPhotoUrls,
  useCreatePostStore,
} from '@/features/posts/createPostStore'
import { useCreatePost } from '@/features/posts/hooks/useCreatePost'
import { DescriptionStep } from '@/features/posts/ui/createPost/steps/description'

type Props = {
  closeModal: () => void
}

export const CreatePostSteps: FC<Props> = ({ closeModal }) => {
  const formData = useCreatePostStore(selectFormData)
  const { mutate: createPost } = useCreatePost()

  const photos = useCreatePostStore(selectPhotoUrls)
  const clearState = useCreatePostStore(selectClearState)
  const swiperRef = useRef<SwiperRef | null>(null)
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const createPostHandler = (): void => {
    createPost(formData)
    closeModal()
    clearState()
  }

  return (
    <>
      <div className={s.navigation}>
        <div className={s.back} onClick={() => swiperRef.current?.swiper.slidePrev()} aria-hidden>
          back
        </div>
        {slideIndex === 0 ? (
          <button
            className={s.next}
            onClick={() => swiperRef.current?.swiper.slideNext()}
            type="button"
          >
            Next
          </button>
        ) : (
          <button className={s.publish} type="button" onClick={createPostHandler}>
            Publish
          </button>
        )}
      </div>
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
          <DescriptionStep />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
