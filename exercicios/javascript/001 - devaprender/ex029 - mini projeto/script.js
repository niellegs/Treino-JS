function Address(rua, cidade, CEP) {
    this.rua = rua,
    this.cidade = cidade,
    this.CEP = CEP,
    this.exibirEndereço = function() {
        console.log(`${this.rua}, ${this.cidade}, ${this.CEP}`)
    }
}

let carmem = new Address("carmo", "boa vista", 000)
console.log(carmem.exibirEndereço())