
// if(true){
//     const mensagem  = 'Olá'    
//     console.log(mensagem);
// }

//dentro do escopo do if a mensagem é imprimida

// if(true){
//     const mensagem  = 'Olá'    
// }
// console.log(mensagem);

//fora do escopo do if a mensagem não imprime 

//  {
//     const mensagem = 'Olá'
//     console.log(mensagem);
//  }

 // o bloco de código autônomo tambem cria um escopo

//  {
//     var mensagem = 'Olá'
//     console.log(mensagem);  
//  }

//  console.log(mensagem);

let numero = 123 //variavel global

function falar(){
    var mensagem = 'olá mundo'
    console.log(mensagem);
}

console.log(numero); 

falar()
console.log(mensagem);



// Na função a variavel var fica inacessível fora do escopo da função onde foi criada

//uma função dentro de outra função também fica acessivel somente dentro do escopo de criação 
