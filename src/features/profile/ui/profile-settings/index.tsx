import { FC, useEffect } from 'react'

import { useForm } from 'react-hook-form'

import { Button } from '@/common/components/button/Button'
import { BaseInput } from '@/common/components/input'
import { Textarea } from '@/common/components/textarea/Textarea'
import { useGetProfile } from '@/features/profile/hooks/useGetProfile'
import { useUpdateProfileInfo } from '@/features/profile/hooks/useUpdateProfileInfo'
import { ProfileType } from '@/features/profile/types'
import s from '@/features/profile/ui/profile-settings/ProfileSettings.module.scss'
import { profileInfoValidate } from '@/features/profile/validate/profileInfoValidate'

type PropsType = {
  buttonText: string
}

const ProfileSettings: FC<PropsType> = ({ buttonText }) => {
  const { data: profileData } = useGetProfile()
  const { mutate: createAccount, isLoading } = useUpdateProfileInfo()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileType>({ defaultValues: { ...profileData } })

  const onSubmit = (data: ProfileType): void => {
    createAccount(data)
  }

  useEffect(() => {
    if (profileData) {
      Object.entries(profileData).forEach(([key, value]) => {
        setValue(key as keyof typeof profileData, value)
      })
    }
  }, [setValue, profileData])

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit((data: any) => onSubmit(data))}>
        <div className={s.inputs}>
          <BaseInput
            name="username"
            label="User name"
            register={register}
            rules={profileInfoValidate.username}
            error={errors.username?.message}
          />
          <BaseInput
            name="firstName"
            label="First name"
            register={register}
            rules={profileInfoValidate.firstName}
            error={errors.firstName?.message}
          />
          <BaseInput
            name="lastName"
            label="Second name"
            register={register}
            rules={profileInfoValidate.lastName}
            error={errors.lastName?.message}
          />
          <BaseInput
            label="Date of birthday"
            placeholder="01.02.2023"
            rules={profileInfoValidate.birthday}
            name="birthday"
            register={register}
            error={errors.birthday?.message}
          />
          <BaseInput
            label="City"
            name="city"
            register={register}
            rules={profileInfoValidate.city}
            error={errors.city?.message}
          />
          <div>About Me</div>
          <Textarea
            placeholder="About me must be shorted than 200 characters."
            className={s.textArea}
            register={register}
            name="aboutMe"
            rules={profileInfoValidate.aboutMe}
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
