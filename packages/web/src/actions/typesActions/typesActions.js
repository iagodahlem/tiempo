import * as actionTypes from '../../constants/actionTypes'

export const update = (types) => ({
  type: actionTypes.TYPES_UPDATE,
  payload: {
    types,
  },
})
