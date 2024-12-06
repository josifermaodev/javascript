const leia = require("readline-sync")

  //linhas da matriz
let matrizInteiros = new Array(2);

 //colunas da matriz
for (let indice = 0; indice < matrizInteiros.length; indice++) {
    matrizInteiros[indice] = Array(4);
}

 //percorrendo a matriz e preenchendo com os dados
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++) {
            matrizInteiros[indiceLinha][indiceColuna] = leia.questionFloat("Digite uma nota: ");
    }
}
//criei um arry para armazenar as medias de cada linha
let media = new Array(matrizInteiros.length);

//calcula as médias das notas de cada linha
for(let i = 0; i < matrizInteiros.length; i++) {
    //extrai as 4 notas de cada linha
  let nota1 = matrizInteiros[i][0];
  let nota2 = matrizInteiros[i][1];
  let nota3 = matrizInteiros[i][2];
  let nota4 = matrizInteiros[i][3];
  
  //soma das 4 notas
  let soma = nota1 + nota2 + nota3 + nota4;

  //calculo da media da soma das 4 notas
  media[i] = soma / 4;
}

//repetição para exibir as medias no console
for (let j = 0; j < media.length; j++){
    console.table(media[j].toFixed(1));
}

