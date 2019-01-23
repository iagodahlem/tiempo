import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

const container = {}

const middlewares = [thunk.withExtraArgument(container), multi]
const mockStore = configureMockStore(middlewares)

global.mockStore = mockStore
