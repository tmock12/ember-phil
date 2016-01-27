import Ember from 'ember';
import iteration from '../utils/phil-iteration';
import lorem from '../utils/phil-lorem';

export function phil([property, option]) {
  switch(property) {
    case "pick":
      return iteration.pick(option);
    case "words":
      return lorem.words(option);
  }
  return;
}

export default Ember.Helper.helper(phil);
