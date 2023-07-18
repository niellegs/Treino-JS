// tipo primitivo
const messagem = '  minha primeira mensagem  '

// tipo objeto
const outraMensagem = new String("Bom dia")

// Verificar o tamanho:
outraMensagem.length

// Verificar se a string possui algo:
outraMensagem.includes('primeira')

// Verifica se inicia com determinada palavra:
outraMensagem.startsWith("Bom")

// Verifica se termina com:
outraMensagem.endsWith("Mensagem")

// Verifica qual o índice:
outraMensagem.indexOf("dia")

// Substitui o primeiro valor:
outraMensagem.replace("dia", "fim de semana")

// Tira os espaços excedentes:
messagem.trim()

// Quebrar uma string no espaço:
outraMensagem.split(' ')