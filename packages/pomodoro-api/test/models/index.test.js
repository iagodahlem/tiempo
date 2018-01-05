const models =require('../../src/models')

describe('models', () => {
  it('returns the Entry model', () => {
    expect(models.Entry).toBeDefined()
  })

  it('returns the Type model', () => {
    expect(models.Type).toBeDefined()
  })

  it('returns the User model', () => {
    expect(models.User).toBeDefined()
  })
})
