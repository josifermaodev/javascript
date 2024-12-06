const leia = require("readline-sync");

let numeros = new Array(10);
let temp;
let soma = 0;

// Lê os números e armazena no array 'numeros'.
for  (let x = 0; x < 10; x++){
    numeros[x] = leia.questionInt(`Digite o ${x + 1}(o) numero: `);
    // console.log(numeros[x])
    }

console.log("Elementos nos índices ímpares:\n")
// Exibe os elementos nos índices ímpares.
for (let i = 0; i < 10; i++) {
    if(i % 2 != 0){
        console.log(numeros[i], " ")
    }
}

console.log("\nElementos pares: \n")

for (let j=0; j<10; j++) {
    if(numeros[j] % 2 == 0){
        console.log(numeros[j], " ")
    }
}
console.log("\nSoma: \n")

for (let y=0; y<10; y++) {
    soma += numeros[y] 
}
console.log(soma)

console.log("\nMédia: \n")
console.log(soma/10)