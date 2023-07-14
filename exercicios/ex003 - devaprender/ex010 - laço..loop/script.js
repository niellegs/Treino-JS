// FOR

for(let i = 0; i < 5; i++) {
    console.log("Estou aprendendo", 0)
}

// WHILE

let i = 5;
while(i > 0) {
    console.log(i)
    i--
}

// DO..WHILE
 i = 0;
do {
    console.log("digitando")
    i++
} while (i < 10)

// FOR... IN
// Resgata propriedades de um objeto

const pessoa = {
    nome: "Jhonatan",
    idade: 25
}

for(let chave in pessoa) {
    console.log(pessoa['nome'])
}

// FOR... OF 
//  Maneira mais simples de fazer iteração de arrays

cores = ["Azul", "Roxo", "Vermelho", "Laranja"]

for(let cor of cores) {
    console.log(cor)
}