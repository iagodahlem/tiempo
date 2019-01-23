import { createContainer } from 'awilix'
import timerContainer from 'timer/container'

export const configureContainer = () => {
  const container = createContainer()

  container.register({
    ...timerContainer,
  })

  return container
}
