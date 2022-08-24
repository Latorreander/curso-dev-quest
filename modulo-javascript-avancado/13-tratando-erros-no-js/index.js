let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

      if(typeof chaleiraEstaNoFogao != 'booleano') throw "Somente o tipo booleano é aceito"

      if(chaleiraEstaNoFogao && fogaoEstaLigado){
          console.log('Passo 1 finalizado: Água fervida');
          resolve()
      } else{
         const mensagemDeErro = 'é necessario colocar a chaleira no fogão senão o teu cafézinho não vai ficar pronto nunca'
          reject(mensagemDeErro)
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

let chaleiraEstaNoFogao = 3;
let fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe() {
    try{
      const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
      const cafePassado = await passarOCafe(aguaFervida);
      const cafeTomado = await tomarCafe(cafePassado);
      const xicaraLavada = await lavarXicara(cafeTomado);

    }catch(err){
      console.log(err);
    }finally{
      console.log("Finalizado o ritual do café, bora trabalhar");
    }
}
iniciarProcessoDeFazerCafe();
