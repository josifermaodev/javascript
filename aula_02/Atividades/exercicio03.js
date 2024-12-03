//Elabore um algoritmo em Java, que leia o Salário Bruto, o Adicional Noturno, as Horas 
//Extras e os Descontos de um Colaborador, em variáveis do tipo float e exiba na tela o Salário Líquido

// Salário Bruto: 2000.00
// Adicional Noturno: 500.00
// Horas Extras: 100.00
// Descontos: 200.00

const leia = require("readline-sync");


let salarioBruto = leia.questionFloat('\nInforme o valor bruto do salario: ');
let adicionalNoturno = leia.questionFloat('\nInforme o adicional noturno: ');
let horasExtras = leia.questionFloat('\nInforme o valor em horas extras trabalhadas: ');
let descontos = leia.questionFloat('\nInforme o valor dos descontos: ');

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log("O salário líquido total é de: ", salarioLiquido.toFixed(2))

