import React from 'react';

import s from '@/features/account/ui/profile-settings/ProfileSettings.module.scss';
import { BaseInput } from '@/shared/input';
import { Button } from '@/shared/button/Button';
import { useCreateAccountValid } from '@/features/account/hooks/useCreateAccountValid';
import { Textarea } from '@/shared/textarea/Textarea';

type PropsType = {

  buttonText: string
  imgFile:any
}

const ProfileSettings = ({  buttonText ,imgFile }: PropsType) => {

  const {
    register,
    errors,
    onSubmit,
    isLoading,
    handleSubmit,
    userNameRules,
  } = useCreateAccountValid(imgFile as File)

  return (
    <div className={s.createAccountBlock}>
      <form  className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputs}>
          <BaseInput
            name={'username'}
            label={'User name'}
            register={register}
            rules={userNameRules}
            error={errors.username?.message}
          />
          <BaseInput
            name={'name'}
            label={'First name'}
            register={register}
          />
          <BaseInput
            name={'surName'}
            label={'Second name'}
            register={register}
          />
          <BaseInput
            label={'Date of birthday'}
            placeholder={'01.02.2023'}
            name={'birthday'}
            register={register}
          />

          <BaseInput
            label={'City'}
            name={'city'}
            register={register}
          />
          <div>About Me</div>

          <Textarea
            className={s.textArea}
            register={register}
            name={'aboutMe'}
          />
          <div>
            <Button disabled={isLoading} button_name={buttonText}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
