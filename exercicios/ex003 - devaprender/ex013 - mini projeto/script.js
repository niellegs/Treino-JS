// Velocidade máx: 70km
// cada 5km = 1 ponto na carteira
// pontos > 12 = carteira suspensa

function verifySpeed(velocidade) {
    const velMax = 70;
    vel =  velocidade - velMax;
    pontos = vel / 5
    multa = vel <= 0? "Sem multa" : `sua multa é de ${Math.floor(pontos)} pontos. `

    console.log(multa)

    if(pontos >= 12) {
        console.log("Limite de pontos atingido. Sua carteira foi suspensa.")
    }
}

verifySpeed(225)