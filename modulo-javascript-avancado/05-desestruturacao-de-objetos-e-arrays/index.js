let pessoa = {nome: 'Anderson', sobrenome: 'Latorre', idade: 37}

// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome);
// console.log(idade);
    

//USANDO A DESESTRUTURAÇÃO:

// let {nome: nome, idade: idade, sobrenome: sobrenome} = pessoa 

// console.log(nome);
// console.log(idade);
// console.log(sobrenome);


//PODEMOS RETIRAR A PROPRIEDADE DO OBJETO E DEIXAR SOMENTE A DECLARAÇÃO PROPRIAMENTE DITA:

// let {nome, idade,sobrenome} = pessoa

// console.log(nome);
// console.log(idade);
// console.log(sobrenome);

const  numeros = [1, 2, 3];

const [casa, carro, pipa] = numeros

console.log(casa);
console.log(carro);
console.log(pipa);



