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
    rules
  } = useChangeSettings()

  return (
    <div>
      <form  className={s.form} onSubmit={handleSubmit(data => onSubmit({ ...data, avatar: imgFile as File }))}>
        <div className={s.inputs}>
          <BaseInput
            name={'username'}
            label={'User name'}
            register={register}
            rules={rules.username}
            error={errors.username?.message}
          />
          <BaseInput
            name={'firstName'}
            label={'First name'}
            register={register}
            rules={rules.firstName}
            error={errors.firstName?.message}
          />
          <BaseInput
            name={'lastName'}
            label={'Second name'}
            register={register}
            rules={rules.lastName}
            error={errors.lastName?.message}
          />
          <BaseInput
            label={'Date of birthday'}
            placeholder={'01.02.2023'}
            rules={rules.birthday}
            name={'birthday'}
            register={register}
            error={errors.birthday?.message}
          />
          <BaseInput
            label={'City'}
            name={'city'}
            register={register}
            rules={rules.city}
            error={errors.city?.message}
          />
          <div>About Me</div>
          <Textarea
            placeholder={'About me must be shorted than 200 characters.'}
            className={s.textArea}
            register={register}
            name={'aboutMe'}
            rules={rules.aboutMe}
            error={errors.aboutMe?.message}
          />
          <div className={s.button}>
            <Button disabled={isLoading} button_name={buttonText}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
