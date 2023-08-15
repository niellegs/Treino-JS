//  Realiza uma tarefa, mas não devolve nada. Não usamos o valor que ela retorna.

function dizerNome() {
    console.log("Jhonatan")
}

// Realiza a tarefa e dá a possibilidade de colocar o valor retornado numa variável.
function multiplicarPorDois(valor) {
    return valor * 2;
}

let resultado = multiplicarPorDois(5);
