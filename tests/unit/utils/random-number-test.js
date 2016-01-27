import randomNumber from '../../../utils/random-number';
import { module, test } from 'qunit';

module('Unit | Utility | random number');

test('it returns a random number between min and max', function(assert) {
  assert.isWithin(randomNumber(1, 3), 1, 3);
  assert.isWithin(randomNumber(1, 10), 1, 10);
  assert.isWithin(randomNumber(20, 25), 20, 25);
});
