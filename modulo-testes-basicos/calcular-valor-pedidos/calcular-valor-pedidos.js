const meuPedido = {
    itens: [
        {nome: 'Poção de vida',  valor: 100},
        {nome: 'Espada de Prata', valor :300},
        {nome: 'Entrega', valor: 40, entrega: true}
    ]
}
const calculaValorDosPedidos = (pedido) => {
    const valorDosProdutos = pedido.itens.filter((item) => !item.entrega).reduce((totalPedido, pedidoAtual) => totalPedido + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)
    console.log(entrega);

    if(valorDosProdutos >= 500){
        return valorDosProdutos
    }else{
         return valorDosProdutos + entrega[0].valor
    }
}
console.log(calculaValorDosPedidos(meuPedido));


