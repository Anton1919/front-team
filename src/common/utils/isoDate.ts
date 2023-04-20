const TEN = 10

export const isoDate = (date: string): string => {
  return date.slice(0, TEN).split('-').reverse().join('.')
}
