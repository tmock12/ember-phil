import Ember from 'ember';
import iteration from '../utils/phil-iteration';

export function phil([property, option]) {
  switch(property) {
    case "pick":
      return iteration.pick(option);
  }
  return;
}

export default Ember.Helper.helper(phil);
