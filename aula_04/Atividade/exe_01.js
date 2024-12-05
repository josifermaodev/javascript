/**
 * Escreva um algoritmo, que leia 2 números inteiros via teclado, 
onde o primeiro número deve ser menor do que o segundo número. Caso contrário, 
deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.
 */

const leia = require('readline-sync')

console.log(
    "\n==== DIGITE A SEGUIR UM INTERVALO DE NUMEROS  =====",
    "\n=== primeiro o menor numero e depois o maior ======"
)

let numero1 = leia.questionInt('\nDigite o primeiro numero do intervalo: ')
let numero2 = leia.questionInt('\nDigite o ultimo numero do intervalo: ')

// Confirmando se o Primeiro número é menor que o segundo, 
// caso o primeiro seja maior o programa encerra a operação!!
if (numero1 >= numero2) {
    console.log('Intervalo invalido! O primeiro numero deve ser menor do que o segundo.')
    process.exit()
}
// se não faça a seguinte repetição
else {
    console.log("\nNo Intervalo entre 10 e 100: \n")
    for(let i = numero1; i <= numero2; i++){  //criei a variavel i temporária para armazenar os dados atualizados do incremento
        if(i % 3 === 0 && i % 5 === 0){  // executa a condição - i se dividido por 3 = 0 e dividido por 5 = 0 ele imprime.
            console.log(i, "é múltiplo de 3 e 5")
        }
    }
}




