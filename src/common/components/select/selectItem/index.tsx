import * as Select from '@radix-ui/react-select';
import React from 'react';

import s from 'src/common/shared/select/selectItem/selectItem.module.scss'

type SelectItemPropsType = {
  children: React.ReactNode
  value: string
}

const SelectItem = ({ children, value }: SelectItemPropsType) => {
  return (
    <Select.Item className={s.item} value={value}>
      <Select.ItemText>
        {children}
      </Select.ItemText>
    </Select.Item>
  );
};

export default SelectItem