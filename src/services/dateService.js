import differenceInSeconds from 'date-fns/difference_in_seconds'

export const diffSeconds = (start, end) =>
  differenceInSeconds(start, end)
