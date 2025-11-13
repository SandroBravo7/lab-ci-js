const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Importar tus funciones matemáticas
const { suma, divide } = require('./math');

// Endpoint principal
app.get('/', (req, res) => {
    
    let mensaje = '¡Hola Sandro, desde Render y GitHub Actions! 🎉';
    
    // Ejecuta operaciones de prueba que NO fallan
    try {
        const resultadoSuma = suma(10, 25);
        const resultadoDivision = divide(50, 5); // <--- Usa una división válida aquí
        
        // NO LLAMAMOS a divide(5, 0)
        
        mensaje += `\nResultado de la suma (10+25): ${resultadoSuma}`;
        mensaje += `\nResultado de la división (50/5): ${resultadoDivision}`; // Agregamos la división válida
        
    } catch (error) {
        // Mantenemos el catch por si hay un error inesperado, pero es poco probable que se ejecute ahora.
        mensaje += `\nError Inesperado en el servidor: ${error.message}`; 
    }
    
    res.type('text/plain').send(mensaje);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Your service is live en http://localhost:${PORT}`);
});