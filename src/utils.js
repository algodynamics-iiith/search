const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomListAndTarget = (size, limit) => {
  if (size === undefined) {
    size = getRandomNumber(3, 7);
  }
  if (limit === undefined) {
    limit = 100;
  }
  const result = [];
  while (result.length < size) {
    result.push(getRandomNumber(1, limit));
  }
  const target = result[getRandomNumber(1, result.length) - 1];
  return [result, target];
};
