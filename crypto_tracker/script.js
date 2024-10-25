// DOM elements
const cryptoList = document.getElementById('cryptoList');
const allBtn = document.getElementById('allBtn');
const positiveBtn = document.getElementById('positiveBtn');
const negativeBtn = document.getElementById('negativeBtn');

// Cache configuration
const CACHE_KEY = 'cryptoPrices';
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds
const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

let cryptoData = [];

// function to create falling coins
function createFallingCoins(numCoins) {
    const coinAnimationContainer = document.getElementById('coinAnimation');

    for (let i = 0; i < numCoins; i++) {
        const coin = document.createElement('div');
        coin.className = 'coin';

        // Random positioning of the coin
        const leftPosition = Math.random() * 100;
        coin.style.left = `${leftPosition}vw`;

        // Random duration of animation
        const duration = Math.random() * 1.5 + 1.5;
        coin.style.animationDuration = `${duration}s`;

        coinAnimationContainer.appendChild(coin);

        // Remove coin after animation
        coin.addEventListener('animationend', () => {
            coinAnimationContainer.removeChild(coin);
        });
    }
}

// Fetch Crypto Prices
async function fetchCryptoPrices() {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);
    const now = Date.now();

    // Check if we have cached data and if it's still valid
    if (cachedData && cachedTimestamp && (now - cachedTimestamp < CACHE_EXPIRY)) {
        console.log('Using cached data');
        cryptoData = JSON.parse(cachedData);
        displayCryptoPrices(cryptoData);
    } else {
        console.log('Fetching new data');
        try {
            const response = await fetch(apiURL);
            const data = await response.json();

            // Update the data
            cryptoData = data.map(crypto => ({
                name: crypto.name,
                price: crypto.current_price,
                change: crypto.price_change_percentage_24h
            }));

            // Cache the data and the current timestamp
            localStorage.setItem(CACHE_KEY, JSON.stringify(cryptoData));
            localStorage.setItem(`${CACHE_KEY}_timestamp`, now.toString());

            displayCryptoPrices(cryptoData);
        } catch (error) {
            console.error('Error fetching crypto prices:', error);
        }
    }
}

// Display Crypto Prices
function displayCryptoPrices(data) {
    cryptoList.innerHTML = ''; // Clear previous data

    data.forEach(crypto => {
        const cryptoItem = document.createElement('div');
        cryptoItem.className = 'crypto-item';

        const changeSymbol = crypto.change >= 0 ? '▲' : '▼';
        const changeClass = crypto.change >= 0 ? 'positive' : 'negative';
        cryptoItem.innerHTML = `
            <span id="cryptoName">${crypto.name}</span>
            <span id="price">$${crypto.price.toFixed(2)}</span>
            <span class="${changeClass}">${changeSymbol} ${crypto.change.toFixed(2)}%</span>
        `;

        cryptoList.appendChild(cryptoItem);
    });
}

// Filter Functions
function filterAll() {
    displayCryptoPrices(cryptoData);
}

function filterPositive() {
    const positiveData = cryptoData.filter(crypto => crypto.change >= 0);
    displayCryptoPrices(positiveData);
}

function filterNegative() {
    const negativeData = cryptoData.filter(crypto => crypto.change < 0);
    displayCryptoPrices(negativeData);
}

// Event Listeners
allBtn.addEventListener('click', filterAll);
positiveBtn.addEventListener('click', filterPositive);
negativeBtn.addEventListener('click', filterNegative);

// Initialize Function
async function init() {
    createFallingCoins(10); // Trigger coin animation on load
    await fetchCryptoPrices(); // Fetch prices initially
    setInterval(fetchCryptoPrices, 10000); // Auto-refresh every 10 seconds
}

// Run init function on page load
init();
