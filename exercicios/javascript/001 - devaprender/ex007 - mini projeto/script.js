var a = "vermelho"
var b = "azul"

console.log(a)
console.log(b)

function trocarValores() {
    vA = a
    vB = b
    return a = vB, b = vA
}

trocarValores()

console.log(a)
console.log(b)