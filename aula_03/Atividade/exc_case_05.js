/**
 * Com base na tabela abaixo, escreva um algoritmo que leia o código de um item 
 * (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). 
 * A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.
 */

const leia = require('readline-sync')


console.log('\n********* CARDÁPIO *************')
console.log('1 ---- Cachorro Quente -- R$ 10.00')
console.log('2 ---- X-Salada --------- R$ 15.00')
console.log('3 ---- X-Bacon ---------- R$ 18.00')
console.log('4 ---- Bauru ------------ R$ 12.00')
console.log('5 ---- Refrigerante ----- R$ 8.00')
console.log('6 ---- Suco de laranja -- R$ 13.00\n')

let item = leia.questionInt('Digite o codigo do produto desejado: ');
let quantidade = leia.questionInt('Digite a quantidade desejada: ');
let valorTotal;
let produto;

switch(item){
    case 1:
        produto = "Cachorro Quente";
        valorTotal = quantidade * 10.00
        break
    case 2:
        produto = "X-Salada";
        valorTotal = quantidade * 15.00
        break
    case 3:
        produto = "X-Bacon";
        valorTotal = quantidade * 18.00
        break
    case 4:
        produto = "Bauru";
        valorTotal = quantidade * 12.00
        break
    case 5:
        produto = "Refrigerante";
        valorTotal = quantidade * 8.00
        break
    case 6:
        produto = "Suco de laranja";
        valorTotal = quantidade * 13.00;
        break
    default:
        console.log("\nInfelizmente esse produto não existe, tente novamente!")
}

console.log(`
    \nProduto: ${produto}
    \nValor Total: ${new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                }).format(valorTotal)}
`)