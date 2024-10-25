// Select the counter value element and buttons
const counterValueElement = document.getElementById('counterValue');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

// Initialize the counter
let counter = 0;

// Update the displayed counter value
const updateCounterDisplay = () => {
    counterValueElement.textContent = counter;
};

// Add event listener for the increment button
incrementButton.addEventListener('click', function() {
    counter++;
    updateCounterDisplay();
});

// Add event listener for the decrement button
decrementButton.addEventListener('click', function() {
    counter--;
    updateCounterDisplay();
});
