function adicionarComentario(){
   let inputComentario = document.getElementsByName('novo-comentario')

   let textoDigitado = inputComentario[0].value

   let novosComentarios = document.getElementById('novos-comentários')

   novosComentarios.innerHTML += `<p> Novo Comentário: ${textoDigitado}</p>`


}