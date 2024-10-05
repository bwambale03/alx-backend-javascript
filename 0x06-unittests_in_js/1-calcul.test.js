const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.equal(calculateNumber('SUM', 1.3, 1.2), 3);
    assert.equal(calculateNumber('SUM', 1.5, 1.5), 4);
    assert.equal(calculateNumber('SUM', 1.7, 0), 2);
  });

  it('should return the difference of rounded numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 0.3), 1);
    assert.equal(calculateNumber('SUBTRACT', 2.3, 1.5), 1);
    assert.equal(calculateNumber('SUBTRACT', 2, 2.5), -1);
  });

  it('should return the division of rounded numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 1.5, 0.5), 3);
    assert.equal(calculateNumber('DIVIDE', 2, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 3.5, 1.5), 2);
  });

  it('should return 0 for invalid type', () => {
    assert.equal(calculateNumber('INVALID', 1, 1), 0);
  });
});
