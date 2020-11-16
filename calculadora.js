console.log(' ');
console.log('Corriendo aplicacion Calculadora');
const chalk = require('chalk');
const sumar = require('./sumar');
const restar = require('./restar');
const dividir = require('./dividir');
const multiplicar = require('./multiplicar');

let numero1 = 7;
let numero2 = 2;
//let numero2 = 0;//para probar si se multiplica por 0 o si se trata de dividir por 0

console.log(chalk.blue.inverse('Resultado de la suma: ' + sumar(numero1,numero2)));
console.log(chalk.green.inverse('Resultado de la resta: ' + restar(numero1,numero2)));
console.log(chalk.red.inverse('Resultado de la divicion: ' + dividir(numero1,numero2)));
console.log(chalk.yellow.inverse('Resultado de la multiplicacion: ' + multiplicar(numero1,numero2)));

console.log('Final');
console.log(' ');
/*
Respuestas a las preguntas del ejercisio.
1. Se hace dificil leer el codigo, todo esta en un solo archivo y no se puede modularizar o reutilizar en otro lado.
    Hubiese andado igual y no se tendria que usar require para usar los modulos que hicimos, por que esta todo en el mismo archivo
2. Para poder modularizar el proyecto y poder reutilizar el codigo. Al cambiar algo, afecta solo al modulo. No hay codigo duplicado.
    Se tiene un mayor control de donde y cuando usar los modulos.
3. Sera una constante trabajar de esta manera.

*/