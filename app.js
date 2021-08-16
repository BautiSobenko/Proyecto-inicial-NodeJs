//Importacion de la funcion de mult.js
const { crearArch } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();


crearArch(argv.b, argv.l, argv.h) //argv -> consola ^ .b base
    .then( nombreArch => console.log(nombreArch.rainbow, "creado con exito"))
    .catch( err => console.log(err));

//! Uso de npm yargs 
//! Uso de npm colors










