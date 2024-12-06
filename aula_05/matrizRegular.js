const leia = require("readline-sync")
  //linhas da matriz
let matrizInteiros = new Array(3);
 //colunas da matriz
for (let indice = 0; indice < matrizInteiros.length; indice++) {
    matrizInteiros[indice] = Array(3);
}
 //percorrendo a matriz e preenchendo com os dados
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++) {
            matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ");
    }
    
}
let media = new Array(3)

for(let i = 0; i < matrizInteiros.length; i++) {
  let nota1 = matrizInteiros[i][0];
  let nota2 = matrizInteiros[i][1];
  let nota3 = matrizInteiros[i][2];
  
  let soma = nota1 + nota2 + nota3;
  media[i] = soma / matrizInteiros.length
  console.log("media dentro do for: ", media[i])
}


console.table(matrizInteiros);