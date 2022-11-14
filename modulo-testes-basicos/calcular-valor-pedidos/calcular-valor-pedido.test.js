const calcularValorPedido = require('./calcular-valor-pedidos')

it('não cobra o frete quando for superior ou igual a 500', () => {
    //AAA - 3 passos de criação de um teste
    
    //ARRANGE(ARRUMAR, ORGANIZAR E PASSAR  O QUE QUEREMOS TESTAR)
    const meuPedido = {
        itens: [
            {nome: 'Arco encantado',  valor: 2000},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //ACT (AGIR, ACÃO, PASSAR A FUNÇÃO QUE QUEREMOS TESTAR)
    const resultado = calcularValorPedido(meuPedido)
    
    //ASSERT(ASSERÇÃO É O RESULTADO ESPERADO)
    expect(resultado).toBe(2000)
})

it('cobra o valor do frete quando o valor for inferior a 500', ()=>{
    const meuPedido = {
        itens: [
            {nome: 'Sanduíche',  valor: 50},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(150)
})

it('caso o valor seja igual a 500, não é cobrado o frete', () =>{
    const meuPedido = {
        itens: [
            {nome: 'Sanduíche bem caro',  valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(500)
})

it('deve adicionar uma taxa de 20% no valor da entrega caso o estado seja RS', ()=>{
    const pedidoComEstadoRs  = {
        estado: 'RS',
        itens: [
            {nome: 'Sanduíche bem caro',  valor: 400},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRs)

    expect(resultado).toBe(520)
})

it('Deve adicionar uma taxa de 20% no valor da entrega caso o estado seja SC', ()=> {
    const pedidoComEstadoSc  = {
        estado: 'SC',
        itens: [
            {nome: 'Sanduíche bem caro',  valor: 400},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSc)

    expect(resultado).toBe(520)
})

it('Não deve adicionar a taxa de 20% na entrega caso o estado seja SP', ()=>{
    const pedidoComEstadoSp  = {
        estado: 'SP',
        itens: [
            {nome: 'Sanduíche bem caro',  valor: 400},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSp)

    expect(resultado).toBe(500)
})

