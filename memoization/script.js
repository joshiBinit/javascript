function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function memoize(fn) {
    const cache = {};
    const memoizedFunction = function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Returning cached result for:", args);
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };

    memoizedFunction.cache = cache; // Expose the cache
    return memoizedFunction;
}

const memoizedFactorial = memoize(factorial);

const numberInput = document.getElementById("numberInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDisplay = document.getElementById("result");
const timeDisplay = document.getElementById("time");
const cacheDisplay = document.getElementById("cache");

calculateBtn.addEventListener("click", () => {
    const number = parseInt(numberInput.value);
    if (isNaN(number) || number < 0) {
        resultDisplay.textContent = "Please enter a valid non-negative number.";
        return;
    }

    const startTime = performance.now();
    const result = memoizedFactorial(number);
    const endTime = performance.now();

    resultDisplay.textContent = `Factorial of ${number} is: ${result}`;
    timeDisplay.textContent = `Execution time: ${(endTime - startTime).toFixed(4)} ms`;

    // Access the cache from the memoized function
    cacheDisplay.textContent = `Cache: ${JSON.stringify(memoizedFactorial.cache)}`;
});