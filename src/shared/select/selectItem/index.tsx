import * as Select from '@radix-ui/react-select';

import s from './selectItem.module.scss'

const SelectItem = ({ children, value }) => {
  return (
    <Select.Item className={s.item} value={value}>
      <Select.ItemText>
        {children}
      </Select.ItemText>
    </Select.Item>
  );
};

export default SelectItem