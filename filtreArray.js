// Filter Array: Create arrays for all numbers, even numbers, odd numbers, all strings, and long strings (>1 char)

const arr = [1, "A", 10, "B", 12, "C", 14, "D", 15, "E", 36, 13, "AB", "AD"];
console.log("Original array:", arr);
// j'ai écris un code qui filtre les éléments selon leurs natures, nombres ou lettres, après de spécifier si les nombres sont pairs ou impairs, ou si les lettres sont plus de 1.
let numbers = [];
let pairNumbers = [];
let impairNumbers = [];
let strings = [];
let longStrings = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    numbers.push(arr[i]); 

    if (arr[i] % 2 === 0) {
      pairNumbers.push(arr[i]); 
    } else {
      impairNumbers.push(arr[i]); 
    }

  } else if (typeof arr[i] === "string") {
    strings.push(arr[i]); 

    
    if (arr[i].length > 1) {
      longStrings.push(arr[i]);
    }
  }
}

console.log("Numbers array:", numbers);
console.log("Pair Numbers array:", pairNumbers);
console.log("Impair Numbers array:", impairNumbers);
console.log("Strings array:", strings);
console.log("Long strings array:", longStrings);
