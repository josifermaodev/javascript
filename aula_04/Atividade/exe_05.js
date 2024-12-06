/**
 * 
Escreva um algoritmo, que leia números inteiros via teclado, 
até que o número zero seja digitado. Ao final, mostre na tela a soma de 
todos os números digitados, que sejam positivos.
 */

const leia = require('readline-sync')
let soma = 0;
let numero;

do {
    //parseInt (10) transforma a string em numero inteiro
    numero = parseInt(leia.questionInt('Digite um numero: '), 10) 
    
    // Valida se o número é positivo
    if (numero > 0)
        soma += numero; //se o número for positivo ele o adiciona a soma
    
}while(numero != 0) // Continua enquanto o número for diferente de 0

console.log(`A soma dos números positivos digitados é: ${soma}`);

