export const allIds = (arr) => arr
  .map(item => item.id)

export const byId = (arr) => arr
  .reduce((obj, item) => ({
    ...obj,
    [item.id]: item,
  }), {})
