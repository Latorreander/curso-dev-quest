/*var nomePessoa = "Anderson"

const emailPessoa = "ander@gmail.com"

 emailPessoa = "carol@gmail.com"

console.log(emailPessoa);

let telefonePessoa = "5565656565"

telefonePessoa = "5555555"

console.log(telefonePessoa)

*/

//Foi atribuido um valor na variavel const e logo depois esse valor foi mudado, então no console irá dar erro, pois const depois de declarado seu valor não poderá mais ser mudado.




/*let emailPessoa2 = "ander@gmail.com"

emailPessoa2 = "carol@gmail.com"

console.log(emailPessoa2);*/

//Já nesse caso a variavel let nos permite mudar o valor da variável que ja foi declarada

//Então qual a diferença entre var e let??

//a diferença está no escopo, escopo basicamente é onde aquela variável irá existir:

//--- ESCOPO GLOBAL--- são variaveis que podemos usar em qualquer lugar do nosso código

//--- ESCOPO DE FUNÇÃO --- são variáveis que podemos usar somente dentro de uma função

// ---ESCOPO DE BLOCO --- tudo dentro de chaves, if, else, ou de loops(laços de repetição) tem escopo de bloco esse é o escopo que o var não suporta

{
var nomePessoa = "Anderson"

const emailPessoa = "ander@gmail.com"

let telefonePessoa = "5565656565"
}

console.log(nomePessoa)
console.log(emailPessoa)
console.log(telefonePessoa)

//agora como as variáveis const e let estão dentro de um escopo de bloco não podemos ler o valor dela pois o console.log está fora do bloco




