const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(twoSum([1, 3], 4)).to.equal([1, 3]);
  });
});
