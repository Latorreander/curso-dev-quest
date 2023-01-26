let frutas = ['banana', 'Maçã','Laranja', 'Pêra']

// for(i = 0; i < frutas.length; i++){
//     console.log(`fruta: ${frutas[i]}`)
// }

// let fruta = 0
// for(fruta of frutas){
//     console.log(`fruta: ${fruta}`)
// }

frutas.forEach(function(item){
    console.log(`fruta: ${item}`);
})

frutas.push('Morango')

// frutas.push() - Adiciona um elemento no fim de array
// frutas.pop() - Remove um elemento no fim do array
// frutas.shift() - Remove o primeiro elemento do array
// frutas.unshift() - Adiciona um elemento no inicio do array
// frutas.indexOf('Pêra') - Procura o número da posição de um elemento dentro de um array

// let posicao = frutas.indexOf('Laranja')
// console.log(posicao)