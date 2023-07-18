const mouse = {
    cor: 'red',
    marca: "dazz"
}

// Como adicionar uma nova propriedade:
mouse.velocidade = 5000;
// Adicionando outra propriedade:
mouse.trocarDPI = function() {
    console.log("Mudando DPI..")
}

// Deletar uma propriedade:
delete mouse.velocidade;