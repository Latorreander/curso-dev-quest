const taxaDeEntrega = 0.2

const calcularValorPedido = (pedido) => {
  const valorDosProdutos = pedido.itens
    .filter((item) => !item.entrega)
    .reduce((totalPedido, pedidoAtual) => totalPedido + pedidoAtual.valor, 0);

  const entrega = pedido.itens.filter((item) => item.entrega);

  if (pedido.estado === "RS" || pedido.estado === "SC") {
    const acrescimoEntrega = entrega[0].valor * taxaDeEntrega;
    entrega[0].valor += acrescimoEntrega;
  }

  return valorDosProdutos >= 500
    ? valorDosProdutos
    : valorDosProdutos + entrega[0].valor;
};

module.exports = calcularValorPedido;
