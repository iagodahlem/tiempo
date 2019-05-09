import { createContainer } from 'awilix'
import commonContainer from '@common/container'
import pomodoroContainer from 'pomodoro/container'

export const configureContainer = () => {
  const container = createContainer()

  container.register({
    ...commonContainer,
    ...pomodoroContainer,
  })

  return container
}
