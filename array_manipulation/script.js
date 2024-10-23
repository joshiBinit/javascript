let arr = [];

function addNumber() {
  const numberInput = document.getElementById('numberInput').value;
  if (numberInput !== "") {
    arr.push(Number(numberInput));
    displayArray();
    document.getElementById('numberInput').value = '';
  }
}

function sortArray() {
  arr.sort((a, b) => a - b);
  displayArray();
}

function filterArray() {
  const filteredArr = arr.filter(num => num > 10);
  displayArray(filteredArr);
}

function doubleArray() {
  double=arr.map(num => num * 2);
  displayArray(double);
}

function displayArray(outputArray = arr) {
  document.getElementById('arrayOutput').textContent = outputArray.join(', ');
}
