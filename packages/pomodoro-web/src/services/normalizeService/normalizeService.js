export const allIds = (arr, prop = 'id') => arr
  .map(item => item[prop])

export const byId = (arr, key = 'id', value) => arr
  .reduce((obj, item) => ({
    ...obj,
    [item[key]]: value ? item[value] : item,
  }), {})
