// setTimeout(() => {
//     alert('Olá Mundo')
// }, 3000);


//COM O CLEAR TIMEOUT PODEMOS PARAR A EXECUÇÃO DO SET TIMEOUT:
const idDoTimeOut = setTimeout(() => {
    alert('Olá Mundo')
}, 3000);

clearTimeout(idDoTimeOut)

// setInterval(() => {
//     console.log('Executando a cada 2 segundos');
// }, 2000);

//COM O CLEAR INTERVAL PODEMOS PARAR A EXECUÇÃO DO SET INTERVAL:

const idDoIntervalo = setInterval(() => {
                    console.log("executando a cada 2 segundos");
                    }, 2000);

 console.log(idDoIntervalo);   
clearInterval(idDoIntervalo)            
