// constructor function: Faz a mesma coisa que a factory function, mas faz de uma forma diferente. Faz o uso do New, e não cria o objeto dentro da função como o factory.
// Nome: (PascalCase: Primeira letra sempre maiúscula)

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligação")
    }
}

const celular = new Celular('Asus', 5.5, 5000);