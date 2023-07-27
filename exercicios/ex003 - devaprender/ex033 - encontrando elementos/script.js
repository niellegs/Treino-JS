const marcas = [
    {id: 1, nome: "a"},
    {id: 2, nome: "b"}
];

// find()? retorna o primeiro valor de um array : undefined
let marcaA = marcas.find(function(marca){
    return marca.nome === 'a'
}) 

console.log(marcaA)