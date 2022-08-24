const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas);

/*ANTES TERÍAMOS QUE CONCATENAR DOIS ARRAYS COM A FUNÇÃO 'CONCAT'*/

// let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']
// let pessoas2 = ['Pedro', 'João','Paulo']


// pessoas1 = pessoas1.concat(pessoas2)

// console.log(pessoas1);

/*USANDO O SPREAD:*/


// pessoas1 = [...pessoas1, ...pessoas2]

// console.log(pessoas1);

/*CLONAR OBJETO*/

const pessoa1 ={nome:'Roberto', idade: 33}

const objetoClonado = {...pessoa1}
console.log(pessoa1);
console.log(objetoClonado);

// PODEMOS ALTERAR O OBJETOI CLONADO SEM MUDAR O ORIGINAL