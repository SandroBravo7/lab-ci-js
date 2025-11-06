const { suma, resta, multiplica } = require('./math');

test('suma de 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('resta de 5 - 2 debe ser 3', () => {
    expect(resta(5, 2)).toBe(3);
});

test('multiplicación de 3 * 4 debe ser 12', () => {
    expect(multiplica(3, 4)).toBe(12);
});