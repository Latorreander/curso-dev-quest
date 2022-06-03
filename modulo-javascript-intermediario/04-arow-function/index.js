// let resultadoDaSoma = function(numero1, numero2){
//     return numero1 + numero2
// }

// console.log(resultadoDaSoma(12, 6));

//COM AROW FUNCTION

// let resultadoDaSoma = (numero1, numero2) => {
//     return numero1 + numero2
// }

// console.log(resultadoDaSoma(12, 6));

//quando temos apenas um parâmetro não precisamos colocar parenteses

const incentivarQuester = nomeQuester =>{
    console.log(`Parabéns ${nomeQuester}, você chegou ao módulo de Js intermediário`);
}

incentivarQuester(`Anderson`)

// O RETORNO É O MESMO NOS DOIS EXEMPLOS, PORÉM A FORMA DE ESCRITA MUDA, SAI A PALAVRA 'FUNCTION' E É COLOCADO DEPOIS DO VALOR UMA SETA ' => '

//PODEMOS RESUMIR AINDA MAIS A FUNÇÃO:

let resultadoDaSoma = (numero1, numero2) =>  numero1 + numero2


console.log(resultadoDaSoma(12, 6));