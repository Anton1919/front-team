export type CreateAccountDataType = {
    username: string
    firstName: string
    lastName: string
    birthday: string
    city: string
    aboutMe: string,
    avatar: File
}

export type ProfileType = Partial<Omit<CreateAccountDataType, 'avatar'>> & { profilePhotoLink?: string}