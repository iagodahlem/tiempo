import * as dateService from './dateService'

describe('dateService', () => {
  describe('diffSeconds', () => {
    it('should return the difference in seconds', () => {
      const start = new Date(2014, 6, 2, 12, 30, 20, 0)
      const end = new Date(2014, 6, 2, 12, 30, 7, 999)
      expect(dateService.diffSeconds(start, end)).toBe(12)
    })
  })

  describe('format', () => {
    it('should format correctly', () => {
      expect(dateService.format(1500000, 'SS')).toBe('00')
    })
  })
})
