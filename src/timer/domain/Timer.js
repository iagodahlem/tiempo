export const create = ({ interval = null, title = '', lapse = 0 } = {}) => ({
  interval,
  title,
  lapse,
})

export const tick = (timer, runned, onInterval) => {
  const lapse = decrease(runned)
  const interval = setInterval(() => onInterval(decrease(runned)), 1000)

  return {
    ...timer,
    interval,
    lapse,
  }
}

const decrease = (runned) => runned - Date.now()
