// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

const amounts = [1450, 1680, 17890, 12, 1025478963, 1.02456,0.16];
console.log(amounts);

// supposons que la première valeur est la valeur minimale, puis on vérifie si les autres valeurs ne sont pas inférieurs de cette valeur, si oui on remplace la valeur minimale initiale par la nouvelle.
function MinVal(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// supposons que la première valeur est la valeur maximale, puis on vérifie si les autres valeurs ne sont pas supérieures de cette valeur, si oui on remplace la valeur maximale initiale par la nouvelle.

function MaxVal(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("the Minimum value in this array is:", MinVal(amounts));
console.log("the Maximum value value in this array is:", MaxVal(amounts));
