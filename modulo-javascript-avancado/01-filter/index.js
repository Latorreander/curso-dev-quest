// O FILTER É UMA FUNÇÃO QUE ACEITA OUTRA FUNÇÃO COMO PARÂMETRO, E ESSA FUNÇÃO VAI SER USADA PARA FILTRAR ELEMENTOS DO ARRAY.

// USANDO O LAÇO "FOR" FICARIA DESSA FORMA:

let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

// let pessoasComIdadeDe33Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 33){
//         pessoasComIdadeDe33Anos.push(pessoas[i])
//     }
// }

//console.log(pessoasComIdadeDe33Anos)

//USANDO O FILTER:

// let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa){
//     return pessoa.idade === 33
// })

//USANDO AROW FUNCTION:
let pessoasComIdadeDe33Anos = pessoas.filter(pessoa => pessoa.idade === 33)

console.log(pessoasComIdadeDe33Anos);