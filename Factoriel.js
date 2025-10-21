// n! = n × (n−1) × (n−2) × ... × 1

function factorial(n) {
  if (n < 0) return "n est négatif, factoriel ne peut pas être défini";

  let result = 1; 
  for (let i = 1; i <= n; i++) {
    result *= i; 
  }
  return result; 
}

let n = Number(prompt("Valeur de n :"));

console.log(`The factorial of ${n} is: ${factorial(n)}`); 
