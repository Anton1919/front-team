import { ChangeEvent, FC } from 'react'

type Props = {
  setUrls: (urls: string[]) => void
}
export const SelectPhoto: FC<Props> = ({ setUrls }) => {
  const onChangeSelect = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target?.files
    const urls = []

    if (files && files.length) {
      Array.from(files).forEach(file => {
        urls.push(URL.createObjectURL(file))
      })
      setUrls(urls)
    }
  }

  return (
    <label htmlFor="select-photo">
      <input
        id="select-photo"
        type="file"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={onChangeSelect}
      />
    </label>
  )
}
