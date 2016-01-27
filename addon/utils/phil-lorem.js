import faker from '../faker';

export function words(wordCount) {
  return faker.lorem.words(wordCount).join(' ');
}
