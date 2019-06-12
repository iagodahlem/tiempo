describe('pomodoro page title', () => {
  context('running timer', () => {
    beforeEach(() => {
      const now = new Date(2019, 12, 25)
      cy.clock(now)
      cy.seedAndVisit('pomodoro/pomodoro-running')
    })

    it('has current lapse in title', () => {
      const expected = '22:22'

      cy.tick(153600)

      cy.title().should('include', expected)
    })
  })

  context('in a pomodoro session', () => {
    beforeEach(() => cy.seedAndVisit('pomodoro/pomodoro-running'))

    it('has "Pomodoro" in title', () => {
      const expected = 'Pomodoro'

      cy.title().should('include', expected)
    })
  })

  context('in a short break session', () => {
    beforeEach(() => cy.seedAndVisit('pomodoro/short-break-running'))

    it('has "Short Break" in title', () => {
      const expected = 'Short Break'

      cy.title().should('include', expected)
    })
  })

  context('in a long break session', () => {
    beforeEach(() => cy.seedAndVisit('pomodoro/long-break-running'))

    it('has "Long Break" in title', () => {
      const expected = 'Long Break'

      cy.title().should('include', expected)
    })
  })
})
