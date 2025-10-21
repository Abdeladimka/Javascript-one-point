// Fonction pour générer la suite de Fibonacci jusqu'à n termes (commence à 1)
function FibSequence(n) {
  if (n <= 0) return []; 
  let arr = [1]; 
  if (n === 1) return arr;  [1]
  arr.push(1); 

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]); 
  }
  return arr;
}

let n = Number(prompt("Entrez le nombre de termes à générer pour la suite de Fibonacci :"));

console.log(FibSequence(n));
