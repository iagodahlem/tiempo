import { diffSeconds } from './dateService'

describe('dateService', () => {
  describe('diffSeconds', () => {
    it('should return the difference in seconds', () => {
      const start = new Date(2014, 6, 2, 12, 30, 20, 0)
      const end = new Date(2014, 6, 2, 12, 30, 7, 999)
      expect(diffSeconds(start, end)).toBe(12)
    })
  })
})
