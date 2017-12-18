import * as selectors from './selectors'


describe('selectors', () => {
  const entry = { start: 0, type: 'pomodoro' }
  const pomodoroSession = { id: '1', type: 'pomodoro', done: true }
  const shortBreakSession = { id: '2', type: 'short-break', done: false }
  const longBreakSession = { id: '3', type: 'long-break', done: false }
  const timer = { lapse: 0, running: false, interval: null }
  const pomodoroType = { id: 'pomodoro', name: 'Pomodoro', duration: 25 }
  const shortBreakType = { id: 'short-break', name: 'Short Break', duration: 5 }

  const state = {
    entry,
    timer,
    sessions: {
      allIds: ['1', '2', '3'],
      byId: {
        '1': pomodoroSession,
        '2': shortBreakSession,
        '3': longBreakSession,
      },
    },
    types: {
      allIds: ['pomodoro', 'short-break'],
      byId: {
        'pomodoro': pomodoroType,
        'short-break': shortBreakType,
      },
    },
  }

  describe('fromEntry', () => {
    it('should get the entry', () => {
      expect(selectors.getEntry(state)).toEqual({ ...entry, type: pomodoroType })
    })

    it('should get the entry start', () => {
      expect(selectors.getEntryStart(state)).toBe(entry.start)
    })

    it('should get the entry name', () => {
      expect(selectors.getEntryName(state)).toBe(pomodoroType.name)
    })

    it('should get the entry duration', () => {
      expect(selectors.getEntryDuration(state)).toBe(pomodoroType.duration)
    })

    it('should get the entry type', () => {
      expect(selectors.getEntryType(state)).toEqual(pomodoroType)
    })
  })

  describe('fromSessions', () => {
    it('should get the session', () => {
      expect(selectors.getSession(state, '1')).toEqual(pomodoroSession)
      expect(selectors.getSession(state, '2')).toEqual(shortBreakSession)
      expect(selectors.getSession(state, '3')).toEqual(longBreakSession)
      expect(selectors.getSession(state, 'undefined')).toBe(undefined)
    })

    it('should get the current session (first session that is not done)', () => {
      expect(selectors.getCurrentSession(state)).toEqual(shortBreakSession)
    })

    it('should get all the sessions', () => {
      expect(selectors.getSessions(state)).toEqual([
        pomodoroSession,
        shortBreakSession,
        longBreakSession,
      ])
    })
  })

  describe('fromTimer', () => {
    it('should get the timer', () => {
      expect(selectors.getTimer(state)).toEqual(timer)
    })

    it('should get the timer lapse', () => {
      expect(selectors.getTimerLapse(state)).toEqual(timer.lapse)
    })

    it('should get the timer running', () => {
      expect(selectors.getTimerRunning(state)).toEqual(timer.running)
    })

    it('should get the timer interval', () => {
      expect(selectors.getTimerInterval(state)).toEqual(timer.interval)
    })
  })

  describe('fromTypes', () => {
    it('should get the type', () => {
      expect(selectors.getType(state, 'pomodoro')).toEqual(pomodoroType)
      expect(selectors.getType(state, 'short-break')).toEqual(shortBreakType)
      expect(selectors.getType(state, 'undefined')).toBe(undefined)
    })

    it('should get all the types', () => {
      expect(selectors.getTypes(state)).toEqual([
        pomodoroType,
        shortBreakType,
      ])
    })
  })
})
