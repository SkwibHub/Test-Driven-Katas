const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if numbers  array pased is less than two', () => {
    expect(twoSum([1], 5)).to.deep.equal([]);
  });
});
