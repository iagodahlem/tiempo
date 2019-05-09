import { storageService } from '@common/infra'

describe('storageService', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.getItem.mockClear()
    localStorage.setItem.mockClear()
    localStorage.removeItem.mockClear()
  })

  it('gets a value from localStorage', () => {
    storageService.set('token', '123')

    const value = storageService.get('token')

    expect(localStorage.getItem).toHaveBeenCalledWith('token')
    expect(value).toBe('123')
  })

  it('sets a value on localStorage', () => {
    const key = 'token'
    const rawValue = '123'
    const value = JSON.stringify(rawValue)

    storageService.set(key, rawValue)

    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, value)
    expect(localStorage[key]).toEqual(value)
  })

  it('removes a value from localStorage', () => {
    const key = 'token'
    const rawValue = '123'
    const value = JSON.stringify(rawValue)

    storageService.set(key, rawValue)

    expect(localStorage.setItem).toHaveBeenLastCalledWith(key, value)
    expect(localStorage[key]).toEqual(value)

    storageService.remove(key)

    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
    expect(localStorage[key]).toBeUndefined()
  })
})
