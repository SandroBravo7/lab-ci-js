function suma(a,b){
  // ERROR INTENCIONAL: Suma uno de más. Esto hará que el test falle (2+3=6, en lugar de 5)
  return a + b + 1; 
}

function resta(a,b){
    return a - b;
}

function multiplica(a,b){
    return a * b;
}

function divide(a,b){
    // **NOTA:** Es bueno añadir el manejo de división por cero aquí.
    if (b === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return a / b;
}

module.exports = { suma, resta, multiplica, divide };