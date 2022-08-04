let ordens =[
    {cliente: 'Roberto', tipo:'compra', quantidade: 56, ativo:'NFLX34'},
    {cliente: 'Ricardo', tipo:'compra', quantidade: 76, ativo:'AAPLX34'},
    {cliente: 'Raphael', tipo:'venda', quantidade: 21, ativo:'GOGL34'}
]

//USANDO O LAÇO "FOR" FICA ASSIM:

// let quantidadeDeOrdens = 0
// for(let i = 0; i < ordens.length; i ++){
//     quantidadeDeOrdens += ordens[i].quantidade
// }

// console.log(quantidadeDeOrdens);

//USANDO O REDUCE FICA ASSIM:

// let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens, ordem){
//     return somaDasOrdens + ordem.quantidade
// }, 0)

// console.log(quantidadeDeOrdens);

//COM ARROW FUNCTION:

let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem)=>
somaDasOrdens + ordem.quantidade, 0)

console.log(quantidadeDeOrdens);
