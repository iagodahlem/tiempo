import { asFunction } from 'awilix'
import * as infra from './infra'
import * as app from './app'

export default {
  pomodoroRepository: asFunction(infra.pomodoroRepository),
  initPomodoro: asFunction(app.initPomodoro),
  pausePomodoro: asFunction(app.pausePomodoro),
  playPomodoro: asFunction(app.playPomodoro),
  skipPomodoro: asFunction(app.skipPomodoro),
  stopPomodoro: asFunction(app.stopPomodoro),
}
