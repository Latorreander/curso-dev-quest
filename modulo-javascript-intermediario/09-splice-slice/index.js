//com o slice podemos fazer uma cópia de elementos específicos de um array. ele NÃO ALTERA o array original mas  ele cria um array com os elementos copiados.

let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']
// let frutasExtraidas = frutas.slice(1,2)

// console.log(frutasExtraidas);
 
//-------------------------------------------------

//com o splice removemos elementos do array e criamos um array com esses elementos extraídos, diferente do slice o array original é ALTERADO, e podemos remover e ao mesmo tempo adicionar novos elementos no array

// let frutasExtraidas = frutas.splice(1,1)

// console.log(frutasExtraidas);


let removeEAdicionaFrutas = frutas.splice( 1,2,'Abacaxi','Goiaba')

console.log(removeEAdicionaFrutas)

console.log(frutas);

