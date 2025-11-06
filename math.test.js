const { suma, resta, multiplica, divide } = require('./math');

test('suma de 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('resta de 5 - 2 debe ser 3', () => {
    expect(resta(5, 2)).toBe(3);
});

test('multiplicación de 3 * 4 debe ser 12', () => {
    expect(multiplica(3, 4)).toBe(12);
});

test('divide de 40 / 8 debe ser 5', () => {
    expect(divide(40, 8)).toBe(5);
});

// **RECOMENDADO:** Añadir el test para división por cero
test('manejo de división por cero', () => {
    expect(() => divide(10, 0)).toThrow('No se puede dividir por cero.');
});