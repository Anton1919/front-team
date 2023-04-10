import React from 'react';

import s from '@/features/account/ui/create-account/CreateAccount.module.scss';
import { BaseInput } from '@/shared/input';
import { Button } from '@/shared/button/Button';
import { useCreateAccountValid } from '@/features/account/hooks/useCreateAccountValid';
import ProfilePhoto from '@/features/account/ui/create-account/profile-photo';
import { Textarea } from '@/shared/textarea/Textarea';
import { Spinner } from '@/shared/spinner';

const CreateAccount = () => {
  const { register, errors, onSubmit, isLoading, handleSubmit } = useCreateAccountValid()
  const buttonName=isLoading?<Spinner size={20}/>: 'Create account'
  return (
    <div className={s.createAccountBlock}>
      <div className={s.title}>
        Create profile
      </div>
      <div>
        <form id={'fff'} className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.profilePhoto}>
            <ProfilePhoto name={'accountProfile'} />
          </div>
          <div className={s.inputs}>
            <BaseInput
              required={true}
              id={'userName'}
              name={'username'}
              label={'UserName'}
              register={register}
              error={errors.userName?.message}
            />
            <BaseInput
              required={true}
              id={'name'}
              name={'name'}
              label={'Name'}
              register={register}
              error={errors.name?.message}
            />
            <BaseInput
              required={true}
              id={'surName'}
              name={'surName'}
              label={'SurName'}
              register={register}
              error={errors.surName?.message}
            />
            <BaseInput
              label={'Date of birthday'}
              type="date"
              name={'birthday'}
              register={register}
              error={errors.dateOfBirth?.message}
            />

            <BaseInput
              required={true}
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

            <Button disabled={isLoading} button_name={buttonName}/>
          </div>
        </form>
      </div>

    </div>
  );
};

export default CreateAccount;