export type CreateAccountDataType = {
    username: string
    name: string
    surName: string
    birthday: string
    city: string
    aboutMe: string
}

export type ProfileType = Partial<CreateAccountDataType>