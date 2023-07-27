const numeros = [1,2,3,4]

// Adicionando:

// INICIO
numeros.unshift(0)
// MEIO
numeros.splice(1,0, 1.5)
// FIM
numeros.push(5)

// Encontrar um valor:

// Procura o índice do 2
numeros.indexOf(2)
// Acha o último valor 1
numeros.lastIndexOf(1)
// Verifica se inclui
numeros.includes(2)

// Remover um valor:

// INICIO
numeros.shift()
// MEIO
numeros.splice(5,1,4)
// FIM
numeros.pop()

// Esvaziar um array:
numeros = []
numeros.length = 0
numeros.splice(0, numeros.length)
// numeros.pop() num loop while

// Combinando um array:
const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

const combinado = primeiro.concat(segundo);

// Juntar arrays baseado em algo

const junto = numeros.join(',')

// Dividir um array:
const dividido = combinado.slice(0, 3);

// separar baseado em algo
const frase = "Olha bem vindo ao curso"
frase.split('')