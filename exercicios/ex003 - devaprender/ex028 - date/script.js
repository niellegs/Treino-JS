// Date

// Pega a data atual inteira:
const data1 = new Date();
console.log(data1)

// Cadastrar uma data:
const data2 = new Date('February 22 2005 19:23');
console.log(data2)

// Definir parâmetros:
const data3 = new Date(2019, 03, 06, 9, 30)
console.log(data3)

// Definir o ano:
console.log(data3.setFullYear(2019))