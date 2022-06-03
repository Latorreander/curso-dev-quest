 
//  'use strict'
  
//  this.name = 'Anderson'
 
//  function saudar(){
//      console.log('this no contexto da função' ,this);
//      console.log(`Olá, ${this.name}`);

//     }

//     saudar()

    //aqui o this esta sendo usado no escopo global, mas utilizando o use strict podemos fazer com que o js não leia esse this.name que está globalmente

//     let usuario = {
//         nome: 'Anderson',
//         saudar: function(){
//             console.log('this no contexto do método', this);

//             console.log('this.nome no contexto do método', this.nome);
//         }
//     }

//    usuario.saudar()

   // O THIS NO ESCOPO DE UM MÉTODO DENTRO DE UM OBJETO

   let comida = {
       nome: 'Brócolis',
       temperatura: 0,
   }

   comida.cozinhar = function(temperaturaDeCozimento){
   this.temperatura = temperaturaDeCozimento;
   }

   comida.cozinhar(100)
   console.log(comida);