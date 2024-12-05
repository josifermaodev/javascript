// o Do While exxecuta primeiro e só 
//depois ele testa a condiçao.

const leia = require('readline-sync')

let contador = 1;
let numero = leia.questionInt('Digite um numero: ')

do {
    console.log(`${numero} X  ${contador} = ${numero * contador}`);
    contador++;
}while(contador <= 10)