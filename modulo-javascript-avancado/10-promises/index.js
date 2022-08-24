/*
Pendente
Realizada Resolve
EStabelecida Reject
*/

// new Promise((resolve, reject) => {
    
// })


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando a fervura da água');
            resolve()
        } else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogo');
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)

