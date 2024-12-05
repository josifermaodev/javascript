/**
 * Escreva um algoritmo que leia 3 palavras (string), que definem as 
 * características de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.
 * Em seguida, mostre na tela qual dos animais foi escolhido, baseado nas três palavras digitadas pelo usuário
 */

const leia = require('readline-sync')

const animais = {
    "vertebrado": {
        "ave": {
            "carnivoro": "Aguia",
            "onivoro": "Pomba"
        },
        "mamifero": {
            "onivoro": "Homem",
            "herbivoro": "Vaca"
        }
    },
    "invertebrado": {
        "inseto": {
            "hematofago": "Pulga",
            "herbivoro": "Lagarta"
        },
        "anelidio": {
            "hematofago": "Sanguessuga",
            "onivoro": "Minhoca"
        }
    }
};



const tipo = leia.question("Digite a primeira palavra (vertebrado/invertebrado): ").toLowerCase();
const classe = leia.question("Digite a segunda palavra (ave/mamifero/inseto/anelidio): ").toLowerCase();
const dieta = leia.question("Digite a terceira palavra (carnivoro/onivoro/herbivoro/hematofago): ").toLowerCase();




if (animais[tipo]) {
    if (animais[tipo][classe]) {
        if (animais[tipo][classe][dieta]) {
            console.log("O animal é: " + animais[tipo][classe][dieta]);
        } else {
            console.log("Terceira característica inválida.");
        }
    } else {
        console.log("Segunda característica inválida.");
    }
} else {
    console.log("Primeira característica inválida.");
}


if(animais[tipo] && animais[tipo][classe] && animais[tipo][classe][dieta]){
    console.log("O animal e", animais[tipo][classe][dieta])
    return
}
console.log("Esse animal nao existe!")
