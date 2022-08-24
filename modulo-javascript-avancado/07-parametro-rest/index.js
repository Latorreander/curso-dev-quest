//function(a, b, ...args){
//
//}

// function incentivarQuester(mensagem, ...nomesQuesters){
//     console.log(`${mensagem} ${nomesQuesters}`);

//     console.log(nomesQuesters);
// }

// incentivarQuester('Parabéns por ter chego no módulo de Javascript avançado,', 'Anderson',' João', 'Pedro', 'rafael')

//O PARÂMETRO NOMESQUESTERS SE TRANSFORMA EM UM ARRAY


//PARA PASSAR A MESMA MENSAGEM PARA TODOS OS NOMES UTILIZAMOS O MAP:

function incentivarQuester(mensagem,  ...nomesquesters){
    nomesquesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`));
}

incentivarQuester('Parabéns por ter chego no módulo de Javascript avançado,', 'Anderson',' João', 'Pedro', 'rafael')

