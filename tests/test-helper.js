import resolver from './helpers/resolver';
import Qunit from 'qunit';
import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);

Qunit.assert.isWithin = function(val, min, max) {
  const within = (val >= min) && (val <= max);
  const message =  `${val} is within ${min}..${max}`;
  this.push(within, val, min + '..' + max, message);
};
