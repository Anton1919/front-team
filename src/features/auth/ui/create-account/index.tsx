import React from 'react';

import s from '@/features/auth/ui/create-account/CreateAccount.module.scss';
import { BaseInput } from '@/shared/input';
import { Textarea } from '@/shared/textarea/Textarea';
import { Button } from '@/shared/button/Button';

const CreateAccount = () => {
  return (

    <div className={s.createAccountBlock}>
      <div className={s.title}>
                Create profile
      </div>
      <div>

        <form className={s.form}>
          <div>ADDDD PPPHOOTTOO</div>
          <div className={s.inputs}>
            <BaseInput
              id={'userName'}
              name={'userName'}
              label={'UserName'}
              // register={register}
              // rules={emailRules}
              // error={errors.email?.message}
            />
            <BaseInput
              id={'name'}
              name={'name'}
              label={'Name'}
              // register={register}
              // rules={emailRules}
              // error={errors.email?.message}
            />
            <BaseInput
              id={'surName'}
              name={'surName'}
              label={'SurName'}
              // register={register}
              // rules={emailRules}
              // error={errors.email?.message}
            />
            <input type="date"/>
            <BaseInput
              id={'city'}
              name={'city'}
              label={'City'}
              // register={register}
              // rules={emailRules}
              // error={errors.email?.message}
            />
            <div>About Me</div>
            <Textarea name={'About Me'} handleTextareaChange={() => {
            }}/>
            <Button button_name={'Create Account'}/>
          </div>
        </form>
      </div>

    </div>
  );
};

export default CreateAccount;