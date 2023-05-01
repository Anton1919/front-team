export type ProfileType = {
  username: string
  firstName: string
  lastName: string
  birthday: string
  city: string
  aboutMe: string
  avatar: AvatarType[]
}

type AvatarType = {
  key: string
  resolution: ResolutionType
}

type ResolutionType = 'original' | 'thumbnail'
