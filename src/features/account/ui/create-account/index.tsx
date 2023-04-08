import React from 'react';

import s from '@/features/account/ui/create-account/CreateAccount.module.scss';
import { BaseInput } from '@/shared/input';
import { Textarea } from '@/shared/textarea/Textarea';
import { Button } from '@/shared/button/Button';
import { useCreateAccountValid } from '@/features/account/hooks/useCreateAccountValid';

const CreateAccount = () => {
  const { register, errors, onSubmit, handleSubmit, userNameRules } = useCreateAccountValid()
  console.log(errors)
  return (

    <div className={s.createAccountBlock}>
      <div className={s.title}>
                Create profile
      </div>
      <div>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div>ADDDD PPPHOOTTOO</div>
          <div className={s.inputs}>
            <BaseInput
              required={true}
              minLength={6}
              maxLength={30}
              id={'userName'}
              name={'userName'}
              label={'UserName'}
              // register={register}
              // rules={userNameRules}
              error={errors.userName?.message}
            />
            {errors.name && errors.name.type === 'required' && <span>This is required</span>}
            <BaseInput
              id={'name'}
              name={'name'}
              label={'Name'}
              // register={register}
              // rules={emailRules}
              error={errors.name?.message}
            />
            <BaseInput
              id={'surName'}
              name={'surName'}
              label={'SurName'}
              // register={register}
              // rules={emailRules}
              error={errors.surName?.message}
            />
            <input
              type="date"
              id={'date'}
              name={'date'}
              label={'Date'}
              // register={register}
              // rules={emailRules}
              // error={errors.dateOfBirth?.message}
            />
            <BaseInput
              id={'city'}
              name={'city'}
              label={'City'}
              // register={register}
              // rules={emailRules}
              error={errors.city?.message}
            />
            {/*<div>About Me</div>*/}
            <Textarea
              id={'about-me'}
              name={'About Me'}
              // register={register}
              sx={{ width: 494, height: 84 }}
              error={errors.aboutMe?.message}
              handleTextareaChange={() => {
              }}
            />
            <Button button_name={'Create Account'}/>
          </div>
        </form>
      </div>

    </div>
  );
};

export default CreateAccount;