import React, { useState } from 'react';

import s from '@/features/account/ui/create-account/CreateAccount.module.scss';
import { BaseInput } from '@/shared/input';
import { Button } from '@/shared/button/Button';
import { useCreateAccountValid } from '@/features/account/hooks/useCreateAccountValid';
import ProfilePhoto from '@/features/account/ui/create-account/profile-photo';
import { Textarea } from '@/shared/textarea/Textarea';

const CreateAccount = () => {
  const [imgFile, setImgFile] = useState<File>();

  const {
    register,
    errors,
    onSubmit,
    isLoading,
    handleSubmit,
    userNameRules,
    surNameRules,
    nameRules,
    cityRules,
    birthdayRules
  } = useCreateAccountValid(imgFile as File)

  return (
    <div className={s.createAccountBlock}>
      <div className={s.title}>
                Create profile
      </div>
      <div>
        <form  className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.profilePhoto}>
            <ProfilePhoto setImgFile={setImgFile} />
          </div>
          <div className={s.inputs}>
            <BaseInput
              name={'username'}
              label={'username'}
              register={register}
              rules={userNameRules}
              error={errors.username?.message}
            />
            <BaseInput
              rules={nameRules}
              name={'name'}
              label={'Name'}
              register={register}
              error={errors.name?.message}
            />
            <BaseInput
              rules={surNameRules}
              name={'surName'}
              label={'SurName'}
              register={register}
              error={errors.surName?.message}
            />
            <BaseInput
              rules={birthdayRules}
              label={'Date of birthday'}
              placeholder={'01.02.2023'}
              name={'birthday'}
              register={register}
              error={errors.birthday?.message}
            />

            <BaseInput
              rules={cityRules}
              label={'City'}
              name={'city'}
              register={register}
              error={errors.city?.message}
            />
            <div>About Me</div>

            <Textarea
              className={s.textArea}
              register={register}
              name={'aboutMe'}
              error={errors.aboutMe?.message}
            />
            <Button disabled={isLoading} button_name={'Create account'}/>
          </div>
        </form>
      </div>

    </div>
  );
};

export default CreateAccount;