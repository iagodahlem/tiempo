import timerTypes from '../constants/timerTypes'

const types = (state = timerTypes, action) => {
  const { type } = action

  switch (type) {
    default:
      return state
  }
}

export default types

export const getType = (state, id) => state.byId[id]
export const getTypes = (state) => state.allIds
  .map(id => state.byId[id])
