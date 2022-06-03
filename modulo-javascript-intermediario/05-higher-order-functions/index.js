// higher ordfer function são funções que recebem outras funções como parâmetros

// const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
//     const mesAtual = 5
//     let anoDeNascimento = 2022 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento --
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log(`Seu ano de nascimento é ${anoDeNascimento}`);
// }

// calcularAnoDeNascimento(37, 5, imprimirAnoDeNascimento)


// console.log(dobrar(2));
 //DESSA FORMA, FICARIA MUITOS CÓDIGOS PARECIDOS O QUE DIFICULTARIA NA HORA DE DAR MANUTENÇÃO, PARAS SIMPLIFICAR PODEMOS RETORNAR UMA FUNÇÃO:

// function dobrar(numero){
//     return numero * 2
// }

// function triplicar(numero){
//     return numero * 3
// }

// function quadruplicar(numero){
//     return numero * 4
// }

//COM O HIGHER ORDER FUNCTION FICA ASSIM:

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3));
console.log(triplicar(3))
console.log(quadruplicar(3))

