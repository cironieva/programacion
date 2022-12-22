// CICLO FOR

// for (variable y valor ; condición; qué hacer en cada iteración) {instrucciones}

// Mostrar los números del 1 al 10

for (i = 1; i < 11; i++) {
  console.log(i);
}

// Mostrar 5 veces XD

for (i = 0; i < 5; i++) {
  console.log("XD");
}

// Mostrar 7 veces LOL pero enumerado

for (i = 1; i <= 7; i++) {
  console.log(i + ". LOL");
}

// Mostrar los días de la semana

/*

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

for (i = 7; i <= dias.length ; i++) {
    console.log(dias[i])
}

iteracion1. [0]Lunes
iteracion2. [1]Martes
iteracion3. [2]Miercoles
iteracion4. [3]Jueves
iteracion5. [4]Viernes
iteracion6. [5]Sábado
iteracion7. [6]Domingo
iteracion8. [7]Undefined

Esto devuelve el último valor undefinded porque PRIMERO ejecuta el bloque de código y DESPUÉS incrementa i 

*/

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

for (i = 0; i <= dias.length - 1 ; i++) {
    console.log(dias[i])
}
