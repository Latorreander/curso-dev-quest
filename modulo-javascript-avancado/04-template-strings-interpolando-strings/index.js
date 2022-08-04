//CONCATENANDO UMA STRING NO MODO TRADICIONAL:

// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//     return "Primeiro Nome: " + primeiroNome + ", Último Nome: " + ultimoNome + ", Idade: " + idade;}

//     console.log(imprimirInformacoesPessoa("Anderson", "Cabral", 37));

//USANDO A TEMPLATE STRING, OU TEMPLATE LITERAL:

    const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
        return `Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}, Idade: ${idade}`;
    }
        // console.log(imprimirInformacoesPessoa("Anderson", "Cabral", 37));

console.log(`${imprimirInformacoesPessoa("Anderson", "Cabral", 37)}, ele é um DevQuester.`);

console.log(`soma ${10 + 30}`)