import { allIds, byId } from './normalizeService'

describe('normalizeService', () => {
  describe('allIds', () => {
    it('returns an object with each property as the ID', () => {
      const current = [
        { id: '1', data: '1' },
        { id: '2', data: '2' },
      ]

      const expected = ['1', '2']

      expect(allIds(current)).toEqual(expected)
    })
  })

  describe('byId', () => {
    it('returns an object with each property as the ID', () => {
      const current = [
        { id: '1', data: '1' },
        { id: '2', data: '2' },
      ]

      const expected = {
        '1': { id: '1', data: '1' },
        '2': { id: '2', data: '2' },
      }

      expect(byId(current)).toEqual(expected)
    })
  })
})
