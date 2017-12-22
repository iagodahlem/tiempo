import { mapTruthyClasses } from './stylesService'

describe('stylesService', () => {
  describe('mapTruthyClasses', () => {
    it('return all classes setted as true', () => {
      const classes = {
        'is-active': true,
        'is-disabled': true,
      }

      const classesExpected = 'is-active is-disabled'

      expect(mapTruthyClasses(classes)).toBe(classesExpected)
    })

    it('return only classes setted as true', () => {
      const classes = {
        'is-active': true,
        'is-disabled': false,
      }

      const classesExpected = 'is-active'

      expect(mapTruthyClasses(classes)).toBe(classesExpected)
    })

    it('do not return classes setted as false', () => {
      const classes = {
        'is-active': false,
        'is-disabled': false,
      }

      const classesExpected = ''

      expect(mapTruthyClasses(classes)).toBe(classesExpected)
    })
  })
})
