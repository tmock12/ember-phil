import philLorem from '../../../utils/phil-lorem';
import { module, test } from 'qunit';

module('Unit | Utility | phil lorem');

test('words', function(assert) {
  const words = function(arg) {
    return philLorem.words(arg);
  };

  assert.ok(words(5).split(' ').length, 5);
  assert.ok(words(4).split(' ').length, 5);
  assert.ok(words(3).split(' ').length, 5);
  assert.ok(words().split(' ').length, 3);
});
