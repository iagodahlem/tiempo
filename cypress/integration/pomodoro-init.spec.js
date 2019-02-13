describe('pomodoro initialization', () => {
  context('first load', () => {
    it('creates and starts a new session', () => {
      cy.visit('/')
      cy.contains('Pomodoro')
      cy.contains('25:00')
    })
  })

  context('skipped session', () => {
    it('starts pointing to the next entry', () => {
      cy.seedAndVisit('pomodoro/skipped')
      cy.contains('Short Break')
      cy.contains('5:00')
    })
  })

  context('running session for 5 seconds', () => {
    beforeEach(() => {
      const now = new Date(2019, 2, 12).getTime()

      cy.clock(now)
      cy.seedAndVisit('pomodoro/running')
      cy.tick(1000)
    })

    it('starts with 5 seconds less', () => {
      cy.contains('Pomodoro')
      cy.contains('24:55')
    })

    it('decreases one second from the timer at each tick', () => {
      cy.tick(1000)
      cy.contains('24:54')
    })
  })

  context('paused session after running for 5 seconds', () => {
    it('starts with 5 seconds less', () => {
      cy.seedAndVisit('pomodoro/paused')
      cy.contains('24:55')
    })
  })
})
