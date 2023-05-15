import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type CreatePostState = {
  formData: FormData
  photoUrls: string[]
  currentPostID: number
  description: string
}

type setDescriptionType = (description: string) => void
type SetCurrentPostIDType = (postID: number) => void
type setFormDataType = (value: string, file: File) => void
type setPhotoUrlsType = (photoUrls: string[]) => void
type ClearStateType = () => void
type CollectFormDataType = () => void
type CreatePostActions = {
  setDescription: setDescriptionType
  setFormData: setFormDataType
  setPhotoUrls: setPhotoUrlsType
  clearState: ClearStateType
  setCurrentPostID: SetCurrentPostIDType
  collectFormData: CollectFormDataType
}

type Store = CreatePostActions & CreatePostState

const initialValue: CreatePostState = {
  formData: new FormData(),
  photoUrls: [],
  currentPostID: 0,
  description: '',
}

export const usePostStore = create(
  immer<Store>(set => ({
    ...initialValue,
    setDescription: description => set({ description }),
    setFormData: (value, file) => set(state => state.formData.append(value, file)),
    setPhotoUrls: photoUrls => set({ photoUrls }),
    setCurrentPostID: currentPostID => set({ currentPostID }),
    clearState: () => set(initialValue),
    collectFormData: () =>
      set(state => {
        if (state.description) {
          state.formData.set('description', state.description)
        }
      }),
  }))
)

export const selectFormData = (state: Store): FormData => state.formData
export const selectPhotoUrls = (state: Store): string[] => state.photoUrls
export const selectSetFormData = (state: Store): setFormDataType => state.setFormData
export const selectSetPhotoUrls = (state: Store): setPhotoUrlsType => state.setPhotoUrls
export const selectClearState = (state: Store): ClearStateType => state.clearState
export const selectSetPostID = (state: Store): SetCurrentPostIDType => state.setCurrentPostID
export const selectCurrentPostID = (state: Store): number => state.currentPostID
export const selectSetDescription = (state: Store): setDescriptionType => state.setDescription
export const selectDescription = (state: Store): string => state.description
export const selectCollectFormData = (state: Store) => state.collectFormData
