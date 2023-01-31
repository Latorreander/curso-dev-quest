let jogo1 = {
    nome: 'Final Fantasy'
}

let jogo2 = {
    nome: 'Fallout'
}

let videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos: [jogo1, jogo2]
}

let jogo3 = {
    nome: 'Fifa'
}

videoGame.jogos.push(jogo3)
console.log(videoGame.jogos)

//Também podemos colocar objetos dentro de um array sem precisar instância-los:

let videoGame2 = {
  nome: 'Xbox',
  valor: 3000,
  jogos: [
    { nome:  'God Of War'}, 
    { nome: 'Days Gone' }

  ]
}

console.log(videoGame2.jogos);
videoGame2.jogos.push({nome: 'The Last Of Us'})
console.log(videoGame2.jogos)



//nesse caso os jogos 'Goid Of War e Days Gone não foram instanciados ou seja não foram atribuídos a uma variável, e mesmo assim foram inseridos dentro do array de jogos


//da mesma forma do exemplo de cima também podemos adicionar com o push() um objeto dessa vez não instanciado dentro do array jogos




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
