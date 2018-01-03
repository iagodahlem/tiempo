import * as types from '../constants/actionTypes'
import * as normalizeService from '../services/normalizeService'

const initialState = {
  byId: {},
  allIds: [],
}

const typesReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case types.GLOBAL_SUCCESS:
      return {
        ...state,
        byId: normalizeService.byId(payload.types),
        allIds: normalizeService.allIds(payload.types),
      }
    default:
      return state
  }
}

export default typesReducer

export const getType = (state, id) => state.byId[id] || {}
export const getTypeByLabel = (state, label) => getTypes(state)
  .find(type => type.label === label)
export const getTypes = (state) => state.allIds
  .map(id => state.byId[id]) || []
