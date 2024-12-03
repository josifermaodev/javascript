//Leia quatro valores float (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4.

const leia = require("readline-sync");

let n1 = leia.questionFloat('\nInforme o primeiro valor: ');
let n2 = leia.questionFloat('\nInforme o segundo valor: ');
let n3 = leia.questionFloat('\nInforme o terceiro valor: ');
let n4 = leia.questionFloat('\nInforme o quarto valor: ');

let diferenca = (n1 * n2) - (n3 * n4)
console.log("A diferença entre os produtos dos valores é: ", diferenca.toFixed(1))