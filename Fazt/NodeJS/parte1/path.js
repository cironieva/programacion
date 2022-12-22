// Módulo Path

const path = require('path');

// Método join() Crea rutas adaptando los separadores al sistema operativo en uso

const ruta = path.join('public', 'views', 'index.html');

console.log(ruta);

// Método basename() Muestra el último archivo de una ruta

console.log(path.basename(ruta));

// Método dirname() Muestra la ruta de un archivo, sin ese archivo

console.log(path.dirname(ruta));

// Método parse() Muestra la ruta pero con la info desglosada en un objeto

console.log(path.parse(ruta));

// Método resolve() Igual que join, pero completa automáticamente la ruta con las carpetas previas del so

console.log(path.resolve('styles.css'));