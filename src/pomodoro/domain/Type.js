const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const FIVE_MINUTES = ONE_MINUTE * 5
const FIFTEEN_MINUTES = ONE_MINUTE * 15
const TWENTY_FIVE_MINUTES = ONE_MINUTE * 25

const types = {
  'short-break': { id: 'short-break', name: 'Short Break', duration: FIVE_MINUTES },
  'long-break': { id: 'long-break', name: 'Long Break', duration: FIFTEEN_MINUTES },
  pomodoro: { id: 'pomodoro', name: 'Pomodoro', duration: TWENTY_FIVE_MINUTES },
}

export const create = id => {
  if (!Object.keys(types).includes(id)) {
    throw new Error(`Type ${id} doesn't exist.`)
  }

  return types[id]
}
