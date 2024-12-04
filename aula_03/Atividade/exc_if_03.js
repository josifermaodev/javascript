/** 
 * Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, 
 * só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), 
 * a idade (número i	nteiro) do doador e se já fez outras doações de sangue (boolean). 
 * Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue.
 */

const leia = require('readline-sync')

let nome = leia.question('Digite o Nome do doador: ')
let idade = leia.questionInt('Digite a Idade do doador: ')
let doacao = leia.keyInYN('Primeira doacao de sangue? ')


if(idade >= 18 && idade <= 59){
    console.log(`${nome} está apto(a) para doar sangue!`)
}else if(idade >= 60 && idade <= 69 && doacao == false){
    console.log(`${nome} está apto(a) para doar sangue!`)
}else{
    console.log(`${nome} não está apto(a) para doar sangue!`)
}