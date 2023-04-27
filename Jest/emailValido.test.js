const validateEmail = require('./emailValido.test.js');

test("validateEmail deve retornar verdadeiro para xxx@ultima.com", () => {
    expect(validateEmail('xxx@ultima.com')).toBeTruthy();
});

test("validateEmail deve retornar falso para xxxZultima.com", () => {
    expect(validateEmail('xxxZultima.com')).toBeFalsy();
});

