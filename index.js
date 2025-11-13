// 1. Importa las funciones de tu módulo math.js
const { suma, resta, multiplica, divide } = require('./math');

console.log('--- Aplicación Node.js de CI/CD Iniciada ---');

// 2. Realiza y muestra algunas operaciones
try {
    console.log(`Suma (10 + 5): ${suma(10, 5)}`);
    console.log(`Resta (20 - 7): ${resta(20, 7)}`);
    console.log(`Multiplicación (4 * 3): ${multiplica(4, 3)}`);
    console.log(`División (50 / 10): ${divide(50, 10)}`);
    
    // 3. Prueba la función de manejo de errores
    console.log('Probando división por cero...');
    divide(10, 0); // Esto lanzará un error y pasará al catch
    
} catch (error) {
    console.error(`ERROR: ${error.message}`);
}

console.log('--- Aplicación terminada. ---');