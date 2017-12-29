import * as types from '../constants/actionTypes'
import * as normalizeService from '../services/normalizeService'

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  error: null,
}

const typesReducer = (state = initialState, { type, payload, message }) => {
  switch (type) {
    case types.TYPES_INDEX_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.TYPES_INDEX_SUCCESS:
      return {
        ...state,
        byId: normalizeService.byId(payload),
        allIds: normalizeService.allIds(payload),
        isLoading: false,
      }
    case types.TYPES_INDEX_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: message,
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
