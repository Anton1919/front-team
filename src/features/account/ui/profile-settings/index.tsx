import React from 'react';

import s from '@/features/account/ui/profile-settings/ProfileSettings.module.scss';
import { BaseInput } from '@/common/components/input';
import { Button } from '@/common/components/button/Button';
import { useChangeSettings } from '@/features/account/hooks/useChangeSettings';
import { Textarea } from '@/common/components/textarea/Textarea';

type PropsType = {

  buttonText: string
  imgFile:any
}

const ProfileSettings = ({  buttonText, imgFile }: PropsType) => {

  const {
    register,
    errors,
    onSubmit,
    isLoading,
    handleSubmit,
    userNameRules,
  } = useChangeSettings()

  return (
    <div>
      <form  className={s.form} onSubmit={handleSubmit(data => onSubmit({ ...data, avatar: imgFile as File }))}>
        <div className={s.inputs}>
          <BaseInput
            name={'username'}
            label={'User name'}
            register={register}
            rules={userNameRules}
            error={errors.username?.message}
          />
          <BaseInput
            name={'firstName'}
            label={'First name'}
            register={register}
          />
          <BaseInput
            name={'lastName'}
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
