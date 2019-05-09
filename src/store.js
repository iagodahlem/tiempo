import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { createLogger } from 'redux-logger'
import { batchedSubscribe } from 'redux-batched-subscribe'
import debounce from 'lodash/debounce'

const debounceNotify = debounce(notify => notify())

export const configureStore = ({ rootReducer, container, initialState = {} }) => {
  const middlewares = [thunk.withExtraArgument(container.cradle), multi]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const enhancers = compose(
    applyMiddleware(...middlewares),
    batchedSubscribe(debounceNotify)
  )

  const store = createStore(rootReducer, initialState, enhancers)

  return store
}
