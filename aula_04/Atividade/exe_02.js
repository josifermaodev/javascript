/**
 * Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela 
 * quantos números são pares e quantos número são ímpares.
 */

const leia = require('readline-sync')

let pares = 0, 
    impares = 0,
    valor, //variavel temporária para armazenar um novo dado
    numero; //variavel para armazenar um novo dado digitado


for (valor = 0; valor < 10; valor++) {
    numero = leia.questionInt(`Digite o ${valor + 1}(o) numero: `);
    
    if (numero % 2 === 0) {
        pares++; 
    }
    else{
        impares++
    } 
}

console.log(`\nTotal de numeros pares: ${pares}`);
console.log(`\nTotal de numeros impares: ${impares}`);
