// let selectDeEstado = document.querySelector("select[name='estado']")

// selectDeEstado.addEventListener('change',
// function (){
//     alert('mudou o estado')
// })
//FORMA ENCURTADA sem variaveis-

// document
// .querySelector("select[name='estado']").addEventListener('change', function (){
//     alert('mudou o estado')
// })

document
.querySelector("select[name='estado']").addEventListener('change', function (event){
    console.log(event.target.value);
})