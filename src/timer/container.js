import { asValue, asFunction } from 'awilix'
import * as infra from './infra'
import * as app from './app'

export default {
  storageService: asValue(infra.storageService),
  sessionsRepository: asFunction(infra.sessionsRepository),
  initTimer: asFunction(app.initTimer),
  pauseTimer: asFunction(app.pauseTimer),
  skipTimer: asFunction(app.skipTimer),
  startTimer: asFunction(app.startTimer),
  stopTimer: asFunction(app.stopTimer),
}
