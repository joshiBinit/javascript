const cardImages = [
    "https://deckofcardsapi.com/static/img/AS.png", 
    "https://deckofcardsapi.com/static/img/2S.png", 
    "https://deckofcardsapi.com/static/img/3S.png", 
    "https://deckofcardsapi.com/static/img/4S.png", 
    "https://deckofcardsapi.com/static/img/5S.png", 
    "https://deckofcardsapi.com/static/img/6S.png", 
    "https://deckofcardsapi.com/static/img/7S.png", 
    "https://deckofcardsapi.com/static/img/8S.png", 
    "https://deckofcardsapi.com/static/img/9S.png", 
    "https://deckofcardsapi.com/static/img/10S.png", 
    "https://deckofcardsapi.com/static/img/JS.png", 
    "https://deckofcardsapi.com/static/img/QS.png", 
    "https://deckofcardsapi.com/static/img/KS.png", 
    "https://deckofcardsapi.com/static/img/AH.png", 
    "https://deckofcardsapi.com/static/img/2H.png"
];

// Duplicate and shuffle card images
const cards = [...cardImages, ...cardImages].sort(() => 0.5 - Math.random());

const gameContainer = document.getElementById('game-container');

cards.forEach((image) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-inner">
            <div class="card front">?</div>
            <img class="card back" src="${image}" alt="Card Image">
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        checkForMatch();
    });

    gameContainer.appendChild(card);
});

let hasFlippedCard = false;
let firstCard, secondCard;

function checkForMatch() {
    const flippedCards = document.querySelectorAll('.card.flipped');
    
    if (flippedCards.length === 2) {
        const isMatch = flippedCards[0].querySelector('img').src === flippedCards[1].querySelector('img').src;
        
        if (isMatch) {
            // Match found
            flippedCards[0].removeEventListener('click', () => {});
            flippedCards[1].removeEventListener('click', () => {});
        } else {
            setTimeout(() => {
                flippedCards[0].classList.remove('flipped');
                flippedCards[1].classList.remove('flipped');
            }, 1000);
        }
    }
}
