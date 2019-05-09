import * as Type from '../Type'

describe('Type', () => {
  it('throws an error when the id is wrong', () => {
    const createWrongType = () => Type.create('incorrect')

    expect(createWrongType).toThrow('Type incorrect doesn\'t exist.')
  })
})
