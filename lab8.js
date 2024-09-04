function PromCalc(numeros) {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / numeros.length;
}

const numeros = [5, 10, 15, 20];
const promedio = PromCalc(numeros);
console.log(`El promedio es: ${promedio}`);

const { error } = require('console');
//ejercicio 2

const fs = require('fs');

function arch(nombre, contenido) {
    fs.writeFile(nombre, contenido, (err) => {
        if (err) {
            console.error('Error', err);
        }
        else {
            console.log('Exito');
        }
    });
}

const nombre = 'lab8.txt';
const contenido = 'Salió adelante el lab 8';
arch(nombre, contenido);