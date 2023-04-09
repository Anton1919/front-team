import React from 'react';

import s from '@/features/account/ui/create-account/CreateAccount.module.scss';
import {BaseInput} from '@/shared/input';
import {Textarea} from '@/shared/textarea/Textarea';
import {Button} from '@/shared/button/Button';
import {useCreateAccountValid} from '@/features/account/hooks/useCreateAccountValid';

const CreateAccount = () => {
  const {register, errors, onSubmit, isLoading, handleSubmit, userNameRules} = useCreateAccountValid()

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
                  name={'userName'}
                  label={'UserName'}
                  register={register}
                  // rules={userNameRules}
                  error={errors.userName?.message}
              />
              <BaseInput
                  name={'name'}
                  label={'Name'}
                  register={register}
                  error={errors.name?.message}
              />
              <BaseInput
                  name={'surName'}
                  label={'SurName'}
                  register={register}
                  error={errors.surName?.message}
              />
              <input
                  type="date"
                  name={'date'}
                  label={'Date'}
                  register={register}
                  // rules={emailRules}
                  error={errors.dateOfBirth?.message}
              />
              <BaseInput
                  id={'city'}
                  name={'city'}
                  label={'City'}
                  register={register}
                  // rules={emailRules}
                  error={errors.city?.message}
              />
              {/*<div>About Me</div>*/}
              <Textarea
                  name={'About Me'}
                  label={'About Me'}
                  register={register}
                  sx={{width: 494, height: 84}}
                  error={errors.aboutMe?.message}
                  handleTextareaChange={() => {
                  }}
              />
              <Button disabled={isLoading} button_name={'Create Account'}/>
            </div>
          </form>
        </div>

      </div>
  );
};

export default CreateAccount;