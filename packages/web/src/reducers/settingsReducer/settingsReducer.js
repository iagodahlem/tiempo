import * as types from '../../constants/actionTypes'
import * as normalizeService from '../../services/normalizeService'

const initialState = {}

const settingsReducer = (state = initialState, { type, payload = {} }) => {
  const { settings } = payload

  switch (type) {
    case types.SETTINGS_UPDATE:
      return {
        ...state,
        ...normalizeService.byId(settings, 'key', 'value')
      }
    default:
      return state
  }
}

export default settingsReducer
