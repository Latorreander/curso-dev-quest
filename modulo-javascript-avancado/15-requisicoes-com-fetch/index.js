document.getElementById('tirar-carta').addEventListener('click',()=>{
    tirarUmaCartaAleatoriaDoBaralho()
})


criarBaralhoEmbaralhado = async () => {
  const url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

  const resposta = await fetch(url);
  return await resposta.json();
};



tirarUmaCarta = async (deck_id) => {
  const url = `http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`;
  const resposta = await fetch(url);
  return await resposta.json();
};

tirarUmaCartaAleatoriaDoBaralho = async () => {
  const baralho = await criarBaralhoEmbaralhado();
  const carta = await tirarUmaCarta(baralho.deck_id);
  const imagemCarta1 = carta.cards[0].image;
  document.getElementById("carta1").src = imagemCarta1

  const imagemcarta2 = carta.cards[1].image
  document.getElementById('carta2').src =
  imagemcarta2
  console.log(carta);

};

tirarUmaCartaAleatoriaDoBaralho();
