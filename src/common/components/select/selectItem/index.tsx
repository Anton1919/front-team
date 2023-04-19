import { FC, ReactNode } from 'react'

import * as Select from '@radix-ui/react-select'

import s from '@/common/components/select/selectItem/selectItem.module.scss'

type SelectItemPropsType = {
  children: ReactNode
  value: string
}

const SelectItem: FC<SelectItemPropsType> = ({ children, value }) => {
  return (
    <Select.Item className={s.item} value={value}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
}

export default SelectItem
