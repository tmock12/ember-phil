import philIteration from '../../../utils/phil-iteration';
import { module, test} from 'qunit';

module('util:phil-iteration', 'Unit | phil iteration', { unit: true });

test('pick', function(assert) {
  let pick = function(arg) {
    return philIteration.pick(arg);
  };

  assert.inArray(pick('foo, bar, baz'), ['foo', 'bar', 'baz']);
  assert.inArray(pick('1, 2, 3'), ['1', '2', '3']);
  assert.isWithin(pick('1..100'), 1, 100);
});
