/** 
 * Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa 
deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática 
(número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. 
Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!
*/

const leia = require('readline-sync')

let primeiroNumero = leia.questionInt('Digite o primeiro numero: ')
let segundoNumero = leia.questionInt('Digite o segundo numero: ')

console.log('\n******* Tipo da operação *******')
console.log('1 - soma')
console.log('2 - Subtração')
console.log('3 - Multiplicação')
console.log('4 - Divisão \n')

let operacao = leia.questionInt('Digite o numero correspondente a operacao escolhida: ');
let resultado;

switch(operacao){
    case 1:
        resultado = primeiroNumero + segundoNumero;
        break
    case 2:
        resultado = primeiroNumero - segundoNumero;
        break
    case 3:
        resultado = primeiroNumero * segundoNumero;
        break
    case 1:
        resultado = primeiroNumero / segundoNumero;
        break
    default:
        console.log("Operação Inválida!")
}

console.log(`${primeiroNumero.toFixed(1)} + ${segundoNumero.toFixed(1)} = ${resultado.toFixed(1)}`)