document.getElementById('tirar-carta').addEventListener('click',()=>{
    tirarUmaCartaAleatoriaDoBaralho()
})


criarBaralhoEmbaralhado = async () => {
  const url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

  const resposta = await fetch(url);
  return await resposta.json();
};

tirarUmaCarta = async (deck_id) => {
  const url = `http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  const resposta = await fetch(url);
  return await resposta.json();
};

tirarUmaCartaAleatoriaDoBaralho = async () => {
  const baralho = await criarBaralhoEmbaralhado();
  const carta = await tirarUmaCarta(baralho.deck_id);
  const imagemCarta = carta.cards[0].image;
  document.getElementById("carta").src = imagemCarta;
};

tirarUmaCartaAleatoriaDoBaralho();
