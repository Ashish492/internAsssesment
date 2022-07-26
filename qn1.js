const prompt = require("prompt-sync")();
let inputArray = [];
let i = 1;
console.log(`enter a q to finish input`);
while (true) {
  try {
    let input = prompt(`enter a ${i} number :`, "q");
    if (input === "q") break;
    if (Number.isNaN(parseFloat(input))) throw "not a number";
    inputArray.push(parseFloat(input));
    i++;
  } catch (error) {
    console.error("***********enter a valid input******");
  }
}
console.log("the user input element:", inputArray);
let largest = Math.max(...inputArray);
console.log(largest);
function calc(array = [], max) {
  if (array.length === 0) return [];
  let percentileArray = array.map((value) => value * (100 / max));
  console.log(percentileArray);
  let resultArray = [];
  for (let i = 0, j = 10; j <= 100; i = i + 10, j = j + 10) {
    let tempArray = percentileArray.filter((value) => i <= value && value < j);
    console.log(tempArray);
    resultArray.push(tempArray.length);
  }
  resultArray[9] = resultArray[9] + countDuplicate(percentileArray, 100);

  console.log(resultArray);
}
function countDuplicate(array = [], elm) {
  return array.filter((value) => value === elm).length;
}
calc(inputArray, largest);
