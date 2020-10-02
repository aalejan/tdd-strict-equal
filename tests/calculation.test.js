let expect = require('chai').expect
const strictEquals = require('../strictEqual')

let describe = require('mocha').describe
let it = require('mocha').it

describe('strictEqual', () => {
  describe('strictEquals', () => {
    it('returns true if both values are equal to each other', () => {
      // setup test data
      let valueA = 5
      let valueB = 5
      // call the function with the test data
      let bool = strictEquals(valueA, valueB)

      // asserts what should be true
      expect(bool).to.equal(true)
    })
  })
})
