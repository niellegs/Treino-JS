function fizzbuzz(num) {
    var nome = "";
    if(num % 3 == 0) {
        nome += "Fizz"
        if(num % 5 == 0) {
            nome += "Buzz"
        }
    } else if(num % 5 == 0) {
        nome += "Buzz"
    } else {
        if(typeof num != "number") {
            console.log("Não é um número")
        } else {
            console.log("Ops. O número não é compatível com nenhum divisor.")
        }
        
    }
    return nome;
}

resultado = fizzbuzz()
console.log(resultado)