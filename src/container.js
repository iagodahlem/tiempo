import { createContainer } from 'awilix'
import timerContainer from 'timer/container'

const container = createContainer()

container.register({
  ...timerContainer,
})

export default container
