function suma(a,b){
    return a + b;
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