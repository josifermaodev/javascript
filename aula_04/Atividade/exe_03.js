/**
 * Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
 * via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o 
 * total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa.
 */

const leia = require('readline-sync')

let idade,
    totalMenor21 = 0,
    totalMaior50 = 0;
    continua = 'S';

while (continua === 'S') {
    idade = leia.questionInt('Digite uma sua idade: ')
    if (idade < 21) {
        totalMenor21++;
    } 
    if (idade > 50) {
        totalMaior50++;
    }

    continua = leia.question("deseja continuar (s/n)").toUpperCase();
}



console.log("Total de pessoas menores de 21 anos: ", totalMenor21)
console.log("Total de pessoas maiores de 50 anos: ", totalMaior50)