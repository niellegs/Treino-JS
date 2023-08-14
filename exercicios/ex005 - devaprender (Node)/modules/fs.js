const fs = require('fs')
const path = require('path')

//Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log('Erro: ', error);
    }
    console.log('Pasta criada com sucesso');
}) 

// Cria um arquivo

fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello world', (error) => {
    if (error) {
        return console.log("erro: ", error)
    }

    console.log("arquivo criado com sucesso")
})

 // Adicionar a um arquivo
 fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello node', (error) => {
    if (error) {
        return console.log("error", error)
    }
    console.log("Arquivo alterado com sucesso")
    //Lendo um arquivo com sua composição original + alteração
    fs.readFile(path.join(__dirname, "/test", "test.txt"), 'utf-8', (error, data) => {
        if (error) {
            return console.log("error: ", error);
        }
        console.log(data)
     })
 })

 // Ler um arquivo
 fs.readFile(path.join(__dirname, "/test", "test.txt"), 'utf-8', (error, data) => {
    if (error) {
        return console.log("error: ", error);
    }
    console.log("Arquivo lido com sucesso")
 })