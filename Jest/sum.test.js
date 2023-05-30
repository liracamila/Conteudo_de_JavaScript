const sum = require('./sum');

test('somar 1 + 2 é igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

/*
expect(value).toEqual(expected): Verifica se value é igual a expected de forma profunda, comparando os valores e propriedades recursivamente.
expect(value).toBeNull(): Verifica se value é null.
expect(value).toBeDefined(): Verifica se value está definido (not undefined).
expect(value).toBeUndefined(): Verifica se value é undefined.
expect(value).toBeTruthy(): Verifica se value é "truthy" (ou seja, não é false, 0, '', null, undefined ou NaN).
expect(value).toBeFalsy(): Verifica se value é "falsy"
*/