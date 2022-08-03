//QUANDO CHAMAMOS O MAP EM UM ARRAY TRANSFORMAMOS ESSE ARRAY EM UM OUTRO ARRAY NOVO, PARECIDO COM O FILTER PORÉM O FILTER É UTILIZADO PARA FILTRAR ELEMENTOS DO ARRAY ORIGINAL, E ESSE NOVO ARRAY SEMPRE TERÁ UM NÚMERO MONOR DE ELEMENTOS QUE O ARRAY ORIGINAL, NO MAP PODEMOS CRIAR UM ARRAY COM O MESMO NÚMERO DE ELEMENTOS DOA RRAY ORIGINAL, É COMO CRIÁSSEMOS UMA CÓPIA.

//COM O LAÇO "FOR" FICARIA ASSIM:

let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

// let nomeDasPessoas = []
// for(let i = 0; i < pessoas.length; i ++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }
// console.log(nomeDasPessoas);

//COM O MAP FICARIA ASSIM:

// let nomeDasPessoas = pessoas.map(function(pessoa){
//     return pessoa.nome
// })

// console.log(nomeDasPessoas);

//USANDO ARROW FUNCTION:

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome)

console.log(nomeDasPessoas);