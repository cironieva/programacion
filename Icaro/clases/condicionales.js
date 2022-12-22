// ESTRUCTURA IF - ELSE

function rangoEtareo(edad) {
  if (edad < 14) {
    console.log("es un niño");
  } else if (edad < 18) {
    console.log("es un adolescente");
  } else if (edad < 60) {
    console.log("es un adulto");
  } else {
    console.log("es un anciano");
  }
}

rangoEtareo(15);

// ESTRUCTURA SWITCH

// Esta estructura no puede comparar rangos, entonces simplemente en la evaluación de los paréntesis ponemos un true

function rangoEdad(edad) {
  switch (true) {
    case edad < 14:
      console.log("es un niño");
      break;
    case edad < 18:
      console.log("es un adolescente");
      break;
    case edad < 60:
      console.log("es un aulto");
      break;
    default:
      console.log("es un anciano");
  }
}

rangoEdad(60);


// OPERADOR TERNARIO

// condición ? expresionTrue : expresionFalse

function dividir(a, b) {
  return b != 0 ? a / b : "No se puede dividir por cero";
}