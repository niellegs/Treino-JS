const path = require('path')

// Basename: Mostra apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test"))