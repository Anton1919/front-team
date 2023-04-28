import { FC } from 'react'

import Image from 'next/image'
import { ClipLoader } from 'react-spinners'

import successSVG from '@/common/assets/icons/success.svg'

export const FinalStep: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return isLoading ? (
    <ClipLoader color="#36d7b7" size={100} />
  ) : (
    <Image src={successSVG} alt="success" width={50} height={50} />
  )
}
