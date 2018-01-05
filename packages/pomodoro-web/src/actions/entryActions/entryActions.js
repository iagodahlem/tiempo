import * as types from '../../constants/actionTypes'

export const update = (entry) => ({
  type: types.ENTRY_UPDATE,
  payload: {
    entry,
  },
})
