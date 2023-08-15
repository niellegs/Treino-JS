const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function() {
        console.log("Fazendo ligação...")
    }
}

// Primeiro método: Object.assign(objeto clonado, original)
const novoObjeto = Object.assign({bateria: 5000}, celular)

// Segundo método: Spread (três pontos):
const objeto2 = {... celular};