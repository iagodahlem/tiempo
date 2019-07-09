describe('Keyboard shortcuts', () => {

  context('Skips timer', () => {
    beforeEach(() => cy.visit('/'))

    it('Right arrow pressed', () => {
      cy.get('body').trigger('keydown', { code: 'ArrowRight' })
      cy.title().should('include', 'Short Break')
    })
  })

  context('Plays timer', () => {
    beforeEach(() => cy.visit('/'))

    it('Enter pressed', () => {
      cy.get('body').trigger('keydown', { code: 'Enter' })
      cy.get('time').invoke('text').should('not.include', '25:00')
    })

    it('Space pressed', () => {
      cy.get('body').trigger('keydown', { code: 'Space' })
      cy.get('time').invoke('text').should('not.include', '25:00')
    })
  })

  context('Stop timer', () => {
    beforeEach(() => cy.visit('/'))

    it('Enter pressed', () => {
      cy.get('body').trigger('keydown', { code: 'Enter' })
      cy.wait(1000)
      cy.get('body').trigger('keydown', { code: 'Escape' })
      cy.get('time').invoke('text').should('include', '25:00')
    })
  })

  context('Pause timer', () => {
    beforeEach(() => cy.visit('/'))

    it('Enter pressed', () => {
      cy.get('body').trigger('keydown', { code: 'Enter' })
      cy.wait(1000)
      cy.get('body').trigger('keydown', { code: 'Enter' })
      cy.wait(2000)
      cy.get('time').invoke('text').should('match', /24:5[89]/)
    })

    it('Space pressed', () => {
      cy.get('body').trigger('keydown', { code: 'Space' })
      cy.wait(1000)
      cy.get('body').trigger('keydown', { code: 'Space' })
      cy.get('time').invoke('text').should('match', /24:5[89]/)
    })
  })
})
