// let jogo1 = {
//     nome: 'Final Fantasy'
// }

// let jogo2 = {
//     nome: 'Fallout'
// }

let jogo3 = {
    nome: 'Fifa'
}

// let videoGame ={
//     nome: 'xbox',
//     valor: 3000,
//     jogos: [jogo1, jogo2]
// }

// foi adicionado o terceiro jogo pelo push
//também poderiamos colocar a propriedade do objeto direto dentro do array:

let videoGame ={
    nome: 'xbox',
    valor: 3000,
    jogos: [
        {nome: 'Final Fantasy'}, 
        {nome: 'Fallout'}
    ]
}

videoGame.jogos.push(jogo3)

console.log(videoGame.jogos);

//aqui um exemplode objeto dentro de objeto:

let cliente = {
    nome: 'Anderson',
    ultimoPedido: {
        produto: 'xbox',
        valor: 3000,
        jogos: [
            {nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome);
