const { sum } = require('./math')

describe('math module', () => {
  it('sums', () => {
    const total = sum(1, 2)
    expect(total).toBe(3)
  })
})
