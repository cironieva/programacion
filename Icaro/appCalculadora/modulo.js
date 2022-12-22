function modulo (a, b) {
    return b != 0 ? a % b : "No se puede dividir por cero";;
}

module.exports = { modulo };