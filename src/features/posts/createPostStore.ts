import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type CreatePostState = {
  formData: FormData
  photoUrls: string[]
  currentPostID: number
}

type setDescriptionType = (description: string) => void
type SetCurrentPostIDType = (postID: number) => void
type setFormDataType = (value: string, file: File) => void
type setPhotoUrlsType = (photoUrls: string[]) => void
type ClearStateType = () => void
type CreatePostActions = {
  setDescription: setDescriptionType
  setFormData: setFormDataType
  setPhotoUrls: setPhotoUrlsType
  clearState: ClearStateType
  setCurrentPostID: SetCurrentPostIDType
}

type CreatePostStore = CreatePostActions & CreatePostState

const initialValue: CreatePostState = {
  formData: new FormData(),
  photoUrls: [],
  currentPostID: 0,
}

export const useCreatePostStore = create(
  immer<CreatePostStore>(set => ({
    ...initialValue,
    setDescription: description => set(state => state.formData.set('description', description)),
    setFormData: (value, file) => set(state => state.formData.append(value, file)),
    setPhotoUrls: photoUrls => set({ photoUrls }),
    setCurrentPostID: currentPostID => set({ currentPostID }),
    clearState: () => set(initialValue),
  }))
)

export const selectFormData = (state: CreatePostStore): FormData => state.formData
export const selectPhotoUrls = (state: CreatePostStore): string[] => state.photoUrls
export const selectSetFormData = (state: CreatePostStore): setFormDataType => state.setFormData
export const selectSetPhotoUrls = (state: CreatePostStore): setPhotoUrlsType => state.setPhotoUrls
export const selectClearState = (state: CreatePostStore): ClearStateType => state.clearState
export const selectSetPostID = (state: CreatePostStore): SetCurrentPostIDType =>
  state.setCurrentPostID
export const selectCurrentPostID = (state: CreatePostStore): number => state.currentPostID

export const selectSetDescription = (state: CreatePostStore): setDescriptionType =>
  state.setDescription
