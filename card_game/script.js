const suits = ['S', 'H', 'D', 'C']; // Spades, Hearts, Diamonds, Clubs
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Generate card image URLs
const cardImages = suits.flatMap(suit => 
    ranks.map(rank => `https://deckofcardsapi.com/static/img/${rank}${suit}.png`)
);

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
