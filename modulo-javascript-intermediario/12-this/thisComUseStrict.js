// 'use strict'

// console.log(this)
// this.nome = 'Anderson'
// function saudar(){
//     console.log('this no contexto de uma função' , this)
//     console.log('Olá, ' +  this.nome + ' Bem-vindo!')
// }

// saudar()

// let usuario = {
//     nome: 'Anderson',
//     saudar: function () {
//         console.log('this no contexto do método', this)
//         console.log('this no contexto do método', this.nome)
//         console.log(this === usuario)
//     }
// }

// console.log(this === window)
// usuario.saudar()


    //aqui o this esta vazando do escopo global para dentro do escopo local da função, mas utilizando o use strict podemos fazer com que o js não leia esse this.nome que está globalmente

//  'use strict'
  
//  this.nome = 'Anderson'
 
//  function saudar(){
//      console.log('this no contexto da função' ,this);
//      console.log('Olá, ' + this.nome + '.');

//     }

//     saudar()

//aqui o this dentro do escopo do metodo usuario passa a ser o próprio objeto usuario

//     let usuario = {
//         nome: 'Anderson',
//         saudar: function(){
//         console.log('this no contexto do método', this);
//         console.log('this.nome no contexto do método', this.nome);
//         }
//     }

//    usuario.saudar()

   // um exemplo de como ficaria verboso esse metodo sem a utilização do this, teriamos que passar dois parâmetros, um referente a comida a ser cozinhada e outro para a temperatura de cozimento

   // let comida ={  
//     nome: 'Brócolis',
//     temperatura: 0
// }

// comida.cozinhar = function(comidaParaCozinhar ,temperaturaDeCozimento){
//     comidaParaCozinhar.temperatura = temperaturaDeCozimento
// }


// console.log(comida)

// comida.cozinhar(comida, 100)

// console.log(comida)

// aqui com a utilização do this, usamos apenas um parâmetro, pois o this está dentro do escopo do objeto então ele se transforma no objeto, nesse caso  o this seria o objeto comida.

   let comida = {
       nome: 'Brócolis',
       temperatura: 0
   }

   comida.cozinhar = function(temperaturaDeCozimento){
   this.temperatura = temperaturaDeCozimento;
   }

   comida.cozinhar(100)
   console.log(comida);




