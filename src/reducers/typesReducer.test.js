import reducer, * as fromReducer from './typesReducer'
import timerTypes from '../constants/timerTypes'

describe('typesReducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {})
    const stateExpected = timerTypes

    expect(state).toEqual(stateExpected)
  })

  describe('getters', () => {
    const state = {
      allIds: ['1', '2', '3'],
      byId: {
        '1': { id: '1', duration: 5 },
        '2': { id: '2', duration: 10 },
        '3': { id: '3', duration: 15 },
      },
    }

    it('should get a type', () => {
      expect(fromReducer.getType(state, '1')).toEqual({ id: '1', duration: 5 })
      expect(fromReducer.getType(state, '2')).toEqual({ id: '2', duration: 10 })
      expect(fromReducer.getType(state, '3')).toEqual({ id: '3', duration: 15 })
    })

    it('should get all the types', () => {
      expect(fromReducer.getTypes(state)).toEqual([
        { id: '1', duration: 5 },
        { id: '2', duration: 10 },
        { id: '3', duration: 15 },
      ])
    })
  })
})
