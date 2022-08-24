
//USANDO O THEN FICARIA ASSIM:

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água fervida');
            resolve()
        } else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogo');
            reject()
        }
    })
}

let passarOCafe = (aguaFervida) =>{
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: O café foi passado');
        resolve(true)
    })
}


let tomarCafe =(cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: tomando o café');
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('passo 4 finalizado: lavando a xícara');
        resolve(true)
    })
}


let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(() =>{
//     return passarOCafe()
// })
// .then(() =>{
//     return tomarCafe()
// })
// .then(() =>{
//     return lavarXicara()
// })
// .then(() =>{
//     console.log('Finalizado o ritual do café, bora trabalhar');
// })

// COM O ASYNC E AWAIT FICARIA ASSIM:

async function iniciarProcessoDeFazerCafe() {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizado o ritual do café, bora trabalhar');
}
iniciarProcessoDeFazerCafe()
