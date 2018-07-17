import * as actionTypes from '../../constants/actionTypes'
import * as normalizeService from '../../services/normalizeService'

const initialState = {
  byId: {},
  allIds: [],
}

const typesReducer = (state = initialState, { type, payload = {} }) => {
  const { types } = payload

  switch (type) {
    case actionTypes.TYPES_UPDATE:
      return {
        ...state,
        byId: normalizeService.byId(types),
        allIds: normalizeService.allIds(types),
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
