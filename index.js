const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Importar tus funciones matemáticas
const { suma, divide } = require('./math');

// Endpoint principal
app.get('/', (req, res) => {
    
    let mensaje = '¡Hola desde Render y GitHub Actions! 🎉';
    
    // 2. Usar las funciones para demostrar la lógica del CI/CD
    try {
        const resultadoSuma = suma(10, 25);
        
        // Simulación de una operación de error que tu código maneja
        divide(5, 0); 
        
        mensaje += `\nResultado de la suma (10+25): ${resultadoSuma}`;
        
    } catch (error) {
        mensaje += `\nError controlado: ${error.message}`;
    }
    
    res.type('text/plain').send(mensaje);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Your service is live en http://localhost:${PORT}`);
});