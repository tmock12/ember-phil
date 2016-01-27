import randomNumber from './random-number';

const isRange = function(val) {
  return /\d+\.\.\d+/.test(val);
};

export function pick(pickOptions) {
  if (isRange(pickOptions)) {
    const [min, max] = pickOptions.split('..');
    return randomNumber(parseInt(min), parseInt(max));
  } else {
    const pickArray = pickOptions.split(',');
    const selected = pickArray[Math.floor(Math.random() * pickArray.length)];
    return selected.replace(/ /g, '');
  }
}
