export const get = (key) => {
  try {
    const raw = localStorage.getItem(key)
    return JSON.parse(raw)
  } catch (error) {
    console.error('LocalStorageError', error)
    return null
  }
}

export const set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return value
  } catch (error) {
    console.error('LocalStorageError', error)
    return null
  }
}

export const remove = (key) => {
  try {
    return localStorage.removeItem(key)
  } catch (error) {
    console.error('LocalStorageError', error)
    return null
  }
}

export const has = (key) => {
  try {
    return Boolean(get(key))
  } catch (error) {
    console.error('LocalStorageError', error)
    return null
  }
}
