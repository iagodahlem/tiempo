import * as types from '../../constants/actionTypes'

const initialState = {
  start: null,
  update: null,
  end: null,
  running: false,
  paused: false,
}

const entryReducer = (state = initialState, { type, payload = {} }) => {
  const { entry } = payload

  switch (type) {
    case types.ENTRY_UPDATE:
      return {
        ...state,
        ...entry,
      }
    default:
      return state
  }
}

export default entryReducer

export const getStart = (state) => state.start
export const getUpdate = (state) => state.update
export const getRunning = (state) => state.running
export const getPaused = (state) => state.paused
