let pessoa = {nome: 'Anderson', sobrenome: 'Latorre', idade: 37}

// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome);
// console.log(idade);
    

//USANDO A DESESTRUTURAÇÃO:

// let {nome: nome, idade: idade, sobrenome: sobrenome} = pessoa 


//PODEMOS RETIRAR A PROPRIEDADE DO OBJETO E DEIXAR SOMENTE A DECLARAÇÃO PROPRIAMENTE DITA:

// let{nome, idade, sobrenome} = pessoa


// // let{nome, idade, sobrenome}

// console.log(nome);
// console.log(idade);
// console.log(sobrenome);

const  numeros = [1, 2, 3];

const [um, dois, tres] = numeros

console.log(um);
console.log(dois);
console.log(tres);



