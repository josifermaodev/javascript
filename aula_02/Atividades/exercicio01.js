const leia = require("readline-sync");

let salario = leia.questionFloat('\nInforme o seu salario: ')
console.log("\nSeu salário atual é de: ", salario)

let abono = leia.questionFloat('\nInforme valor de abonos: ')
console.log("\nO valor dos abonos é de: ", abono)

let novoSalario = salario + abono 
console.log("\nO valor atualizado do seu salário ficou em: ",
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(novoSalario))
