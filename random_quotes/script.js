const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const authorFilter = document.getElementById('authorFilter');

// Function to fetch a quote
async function fetchQuote() {
    const author = authorFilter.value.trim();
    let url = `https://api.quotable.io/quotes?`;

    if (author) {
        url += `author=${author}`;
    } else {
        url += `random=true`;
    }

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            displayQuote(data.results[0]);
        } else if (data.content) {
            displayQuote(data);
        } else {
            quoteDisplay.textContent = "No quotes found for this author.";
        }
    } catch (error) {
        quoteDisplay.textContent = "Error fetching quote: " + error.message;
    }
}

// Function to display the quote
function displayQuote(quote) {
    quoteDisplay.textContent = `"${quote.content}" - ${quote.author}`;
}

// Event listener for the button
newQuoteBtn.addEventListener('click', fetchQuote);

// Fetch a quote on page load
fetchQuote();
