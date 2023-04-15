export const isoDate = (date: string): string => {
  return date.slice(0, 10).split('-').reverse().join('.')
}