export const allIds = (arr, prop = 'id') => arr
  .map(item => item[prop])

export const byId = (arr, prop = 'id') => arr
  .reduce((obj, item) => ({
    ...obj,
    [item[prop]]: item,
  }), {})
