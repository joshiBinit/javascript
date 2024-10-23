document.getElementById('checkButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const resultMessage = document.getElementById('resultMessage');

    if (isPalindrome(inputText)) {
        resultMessage.textContent = `"${inputText}" is a palindrome!`;
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = `"${inputText}" is not a palindrome.`;
        resultMessage.style.color = 'red';
    }
});

function isPalindrome(str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // Check if the cleaned string is the same as its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
