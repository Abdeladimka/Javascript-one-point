// Vérification si un nombre est premier et calcul de sa racine carrée

function prime() {
  let n = Number(prompt("Entrer une valeur: ")); 
  if (n <= 1) {
    console.log(`${n} n'est pas un nombre premier`);
    return;
  }

  let racine = Math.sqrt(n); 
  console.log(`La racine carrée de ${n} est ${racine}`);

  let estPremier = true; // on suppose que n est premier

  for (let i = 2; i <= Math.floor(racine); i++) {
    if (n % i === 0) {
      estPremier = false; // n a un diviseur
      break; // on peut arrêter la boucle
    }
  }

  if (estPremier) {
    console.log(`${n} est un nombre premier`);
  } else {
    console.log(`${n} n'est pas un nombre premier`);
  }
}

prime(); // appel de la fonction
