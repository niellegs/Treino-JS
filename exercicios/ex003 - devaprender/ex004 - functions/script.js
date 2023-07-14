//  Padrão: Verbo + substantivo
// ex: resetaCor
// parametros: usados pra atribuir um valor ao que foi atribuido dentro dos ().

let corSite = "azul";

function colorReset(cor, tonalidade) {
    corSite = cor + tonalidade;
}

colorReset("vermelho", "escuro")

let greeting;
function greetingYou(nome) {
    greeting = "good night," + " " + nome;
}

greetingYou("maria")
console.log(greeting)