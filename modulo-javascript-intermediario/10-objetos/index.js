let tenis = {
// propriedades
//chave: valor
    cor: 'branco',
    tamanho: 42,
    emEstoque: true,
    marca: 'Nike'
}

console.log(tenis); //aqui ele nos imprime todo nosso objeto 
console.log(tenis.cor);// para imprimir um valor específico colocamos o ponto e o nome do valor ou em colchetes assim:

// console.log(tenis[`cor`]);
tenis.valor = 200 // assim adicionamos uma propiedade ao objeto.

console.table(tenis);