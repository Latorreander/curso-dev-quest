// document.getElementById("tirar-carta").addEventListener("click", () => {
//     tirarUmaCartaAleatoriaDoBaralho();
// });

// async function criarBaralhoEmbaralhado() {
//     const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
//     const resposta = await fetch(url);
//     return await resposta.json();
// }

// async function tirarUmaCarta(deck_id) {
//     const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
//     const resposta = await fetch(url);
//     return await resposta.json();
// }

// async function tirarUmaCartaAleatoriaDoBaralho() {
//     const baralho = await criarBaralhoEmbaralhado();
//     const carta = await tirarUmaCarta(baralho.deck_id);
//     const imagemCarta = carta.cards[0].image;

//     document.getElementById("carta").src = imagemCarta;
// }
// tirarUmaCartaAleatoriaDoBaralho();

//--------------------------------------------------------------------------



document.getElementById("tirar-carta").addEventListener("click", () => {
    tirarUmaCartaAleatoria();
});

async function criarBaralhoEmbaralhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resposta = await fetch(url);
    return await resposta.json();
}

async function tirarUmaCartaAleatoria() {
    const baralho = await criarBaralhoEmbaralhado();
    const url = `https://deckofcardsapi.com/api/deck/${baralho.deck_id}/draw/?count=1`;
    const resposta = await fetch(url);
    const carta = await resposta.json();
    const imagemCarta = carta.cards[0].image;
    document.getElementById("carta").src = imagemCarta;
}

tirarUmaCartaAleatoria();


