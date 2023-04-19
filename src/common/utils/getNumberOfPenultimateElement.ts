const TWO = 2

export const getNumberOfPenultimateElement: GetNumberOfPenultimateElementFnType = length =>
  length - TWO
type GetNumberOfPenultimateElementFnType = (length: number) => number
