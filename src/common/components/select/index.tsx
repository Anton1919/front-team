import * as Select from '@radix-ui/react-select';
import Image from 'next/image';

import arrowDown from './arrowDown.svg'
import SelectItem from './selectItem';
import s from './Select.module.scss'

type SelectPropsType = {}

const SelectBox = ({}: SelectPropsType) => {
  const array = [
    { id: 0, title: 'Apple' },
    { id: 1, title: 'Banana' },
    { id: 2, title: 'Blueberry' }
  ]
  const disabled = false

  return (
    <>
      <Select.Root>
        <Select.Trigger className={ s.trigger} disabled={disabled}>
          <div className={s.value}>
            <Select.Value placeholder={array[0].title}/>
          </div>
          {!disabled && 
            <Select.Icon asChild>
              <Image className={s.icon} src={arrowDown} alt={'arrow'} width={15} height={8}/>
            </Select.Icon>
          }
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.content} position={'popper'}>
            <Select.Viewport>
              {array.map(el => <SelectItem key={el.id} value={el.title}>{el.title}</SelectItem>)}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

export default SelectBox;