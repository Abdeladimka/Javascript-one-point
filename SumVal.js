// Sum of Array: Create a function that calculates the sum of all elements in an array.

const values = [1, 1, 1, 1, 1, 1, 1,1,1,1];
console.log(values);


function SumVal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }
  return sum;
}

console.log("The sum of values in this array is:", SumVal(values));
