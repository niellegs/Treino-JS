function exibirNumerosPrimos(quant) {
    for(let numero = 2;  numero <= quant; numero++) {
        let ehPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                ehPrimo = false;
                break;
            }
        }

        if(ehPrimo) console.log(numero);
    } 
}

exibirNumerosPrimos(8)


// Uma função não deve fazer um milhão de coisas diferents
//  Essa função: Descobriu quem era primo (Quando um número é divisível por qualquer outro número), filtra e mostra ele.