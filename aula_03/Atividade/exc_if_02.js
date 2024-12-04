// Escreva um algoritmo que leia um número inteiro via teclado e mostre na 
// tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.

const leia = require('readline-sync')

let numero = leia.questionInt('\nDigite qualquer numero: ')

if(numero % 2 == 0 && numero < 0){
    console.log(`O numero ${numero} e par e negativo`)
}else if(numero % 2 == 0 && numero > 0){
    console.log(`O numero ${numero} e par e positivo`)
}else if(numero % 2 != 0 && numero > 0){
    console.log(`O numero ${numero} e impar e positivo`)
}else if(numero % 2 != 0 && numero < 0){
    console.log(`O numero ${numero} e impar e negativo`)
}
