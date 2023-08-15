function imparPar(l) {
    for(i = 0; i <= l; i++) {
        tipo = i % 2 == 0? "PAR" : "IMPAR";
        console.log(i, tipo)
    }
}

imparPar(10)