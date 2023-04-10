import React from 'react';

import s from '@/features/account/ui/create-account/CreateAccount.module.scss';
import { BaseInput } from '@/shared/input';
import { Button } from '@/shared/button/Button';
import { useCreateAccountValid } from '@/features/account/hooks/useCreateAccountValid';
import ProfilePhoto from '@/features/account/ui/create-account/profile-photo';
import { Textarea } from '@/shared/textarea/Textarea';

const CreateAccount = () => {
  const { register, errors, onSubmit, isLoading, handleSubmit, userNameRules } = useCreateAccountValid()

  return (
    <div className={s.createAccountBlock}>
      <div className={s.title}>
        Create profile
      </div>
      <div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.profilePhoto}>
            <ProfilePhoto />
          </div>
          <div className={s.inputs}>
            <BaseInput
              required={true}
              id={'userName'}
              name={'username'}
              label={'UserName'}
              register={register}
              // error={errors.userName?.message}
            />
            <BaseInput
              id={'name'}
              name={'name'}
              label={'Name'}
              register={register}
              // error={errors.name?.message}
            />
            <BaseInput
              id={'surName'}
              name={'surName'}
              label={'SurName'}
              register={register}
              // error={errors.surName?.message}
            />
            <BaseInput

              label={'Date of birthday'}
              type="date"
              name={'birthday'}
              register={register}
              // error={errors.dateOfBirth?.message}
            />

            <BaseInput
              label={'City'}
              name={'city'}
              register={register}
              // error={errors.city?.message}
            />
            <div>About Me</div>

            <Textarea
              className={s.textArea}
              register={register}
              // sx={{ width:94, height: 84 }}
              name={'aboutMe'}
              // error={errors.aboutMe?.message}
            />

            <Button button_name={'Create Account'}/>
          </div>
        </form>
      </div>

    </div>
  );
};

export default CreateAccount;