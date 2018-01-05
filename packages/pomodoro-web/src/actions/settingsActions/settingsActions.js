import * as types from '../../constants/actionTypes'

export const update = (settings) => ({
  type: types.SETTINGS_UPDATE,
  payload: {
    settings,
  },
})
