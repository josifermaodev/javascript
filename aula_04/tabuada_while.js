// o While testa a condiçao primeiro e só 
//depois ele executa a repetição.

const leia = require('readline-sync')

let contador = 1
let numero = leia.questionInt('Digite um numero: ')

while(contador <= 10) {
    console.log(`${numero} X  ${contador} = ${numero * contador}`);
    contador++;
}