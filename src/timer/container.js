import { asValue, asFunction } from 'awilix'
import { storageService, sessionsRepository } from './infra'
import { initTimer, startTimer, stopTimer, pauseTimer } from './app'

export default {
  storageService: asValue(storageService),
  sessionsRepository: asFunction(sessionsRepository),
  initTimer: asFunction(initTimer),
  startTimer: asFunction(startTimer),
  stopTimer: asFunction(stopTimer),
  pauseTimer: asFunction(pauseTimer),
}
