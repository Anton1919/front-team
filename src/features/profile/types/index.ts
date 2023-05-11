export type ProfileType = {
  username: string
  firstName: string
  lastName: string
  birthday: string
  city: string
  aboutMe: string
  avatar: AvatarType
}

type AvatarType = {
  original: string
  thumbnail: string
}
