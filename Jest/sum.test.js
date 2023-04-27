const sum = require('./sum');

test('somar 1 + 2 é igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});