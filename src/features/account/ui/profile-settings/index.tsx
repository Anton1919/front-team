import { FC } from 'react'

import { Button } from '@/common/components/button/Button'
import { BaseInput } from '@/common/components/input'
import { Textarea } from '@/common/components/textarea/Textarea'
import { useChangeSettings } from '@/features/account/hooks/useChangeSettings'
import s from '@/features/account/ui/profile-settings/ProfileSettings.module.scss'

type PropsType = {
  buttonText: string
  imgFile: any
}

const ProfileSettings: FC<PropsType> = ({ buttonText, imgFile }) => {
  const { register, errors, onSubmit, isLoading, handleSubmit, rules } = useChangeSettings()

  return (
    <div>
      <form
        className={s.form}
        onSubmit={handleSubmit((data: any) => onSubmit({ ...data, avatar: imgFile as File }))}
      >
        <div className={s.inputs}>
          <BaseInput
            name="username"
            label="User name"
            register={register}
            rules={rules.username}
            error={errors.username?.message}
          />
          <BaseInput
            name="firstName"
            label="First name"
            register={register}
            rules={rules.firstName}
            error={errors.firstName?.message}
          />
          <BaseInput
            name="lastName"
            label="Second name"
            register={register}
            rules={rules.lastName}
            error={errors.lastName?.message}
          />
          <BaseInput
            label="Date of birthday"
            placeholder="01.02.2023"
            rules={rules.birthday}
            name="birthday"
            register={register}
            error={errors.birthday?.message}
          />
          <BaseInput
            label="City"
            name="city"
            register={register}
            rules={rules.city}
            error={errors.city?.message}
          />
          <div>About Me</div>
          <Textarea
            placeholder="About me must be shorted than 200 characters."
            className={s.textArea}
            register={register}
            name="aboutMe"
            rules={rules.aboutMe}
            error={errors.aboutMe?.message}
          />
          <div className={s.button}>
            <Button disabled={isLoading} buttonName={buttonText} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProfileSettings
