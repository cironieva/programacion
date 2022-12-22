// Importar módulos
const suma = require("./sumar");
const resta = require("./restar");
const multiplicacion = require("./multiplicar");
const division = require("./dividir");
const modulo = require("./modulo");
const potencia = require("./potenciar");
const raiz = require("./raiz");

// Suma

if (process.argv[2] == "sumar") {
    console.log(process.argv[3] + " + " + process.argv[4] + " = " + suma.sumar(Number(process.argv[3]), Number(process.argv[4])));
}

// Resta

if (process.argv[2] == "restar") {
    console.log(process.argv[3] + " - " + process.argv[4] + " = " + resta.restar(Number(process.argv[3]), Number(process.argv[4])));
}

// Multiplicación

if (process.argv[2] == "multiplicar") {
    console.log(process.argv[3] + " x " + process.argv[4] + " = " + multiplicacion.multiplicar(Number(process.argv[3]), Number(process.argv[4])));
}

// División

if (process.argv[2] == "dividir") {
    console.log(process.argv[3] + " / " + process.argv[4] + " = " + division.dividir(Number(process.argv[3]), Number(process.argv[4])));
}

// Módulo

if (process.argv[2] == "modulo") {
    console.log(process.argv[3] + " % " + process.argv[4] + " = " + modulo.modulo(Number(process.argv[3]), Number(process.argv[4])));
}

// Potencia

if (process.argv[2] == "potenciar") {
    console.log(process.argv[3] + " ^ " + process.argv[4] + " = " + potencia.potenciar(Number(process.argv[3]), Number(process.argv[4])));
}

// Raíz

if (process.argv[2] == "raiz") {
    console.log(process.argv[3] + " √ " + process.argv[4] + " = " + raiz.raiz(Number(process.argv[3]), Number(process.argv[4])));
}