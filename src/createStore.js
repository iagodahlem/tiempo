import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { createLogger } from 'redux-logger'

export default ({ rootReducer, container, initialState = {} }) => {
  const middlewares = [thunk.withExtraArgument(container.cradle), multi]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

  return store
}
