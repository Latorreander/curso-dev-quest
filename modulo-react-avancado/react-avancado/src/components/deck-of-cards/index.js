// import { Component } from 'react' ---usado com componente de classe
import { useEffect, useState } from 'react'
import  Form  from '../forms'
import  './deck-of-cards.css'

async function createDeck(){
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    console.log(response)
    const deck =  await response.json()
    return deck.deck_id
}

async function getCards(deckId){
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return  await response.json()

}

const CardsList = (props) => {
    
    return(
        <ul>
        {
             props.cards.map((card, index) => {
                return(
                    <li key={index}>
                         <img src={card.image} alt={card.value}/>
                         <p>{card.value} {card.suit}</p>
                    </li>
                   
                )
            })
         }
    </ul>
    )
}

const DeckOfCards = () => {

  const  [deck, setDeck] = useState({
        cards: []
    })

    useEffect(()=>{
        const fetchData = async ()=> {
            const deckId =  await createDeck()
            const cardData = await getCards(deckId)
            setDeck({
                cards: cardData.cards
            })
        }
        fetchData()
    },[])

    const addCard = (newCard) => {
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
        <section>
            <Form addCard={addCard}/>
           {deck.cards.length > 0 ? <CardsList cards={deck.cards}/> : 'Nenhuma carta encontrada'}
          
         </section>
    )


// class DeckOfCards extends Component{
//     constructor(){
//         super()
//         this.state = {
//             cards: []
//         }
//     }

//    async componentDidMount(){
//         const deckId =  await createDeck()
//         const cardData = await getCards(deckId)
//         this.setState({
//             cards: cardData.cards
//         })
//     }

//     render(){
//         return(
//             <section>
//                 <ul>
//                     {
//                         this.state.cards.map((card, index) =>{
//                             return(
//                                 <li key={index}>
//                                     <img src={card.image} alt={card.value}/>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </section>
//          )  
//     }
}

export default DeckOfCards