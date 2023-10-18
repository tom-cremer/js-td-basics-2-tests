/*
TESTS - PRÉPA 3 : kw
Ecrire un programme JS qui calcule le coût d’une consommation électrique.
L’utilisateur entre le nombre de KW consommés.
Les 30 premiers KW sont à 25 centimes le KW
Les 31 à 50èmes KW sont à 20 centimes le KW
Les 51 à 70èmes KW sont à 15 centimes le KW
Les KW suivants sont à 10 centimes le KW
*/

/*
Valeurs de test :
- 30 KW => 750 centimes = 7.5 €
- 31 KW => 30 * 25 + 1 * 20 = 770 centimes = 7.7 €
- 40 KW => 30 * 25 + 10 * 20 = 750 + 200 = 950 centimes = 9.5 €
- 50 KW => 30 * 25 + 20 * 20 = 750 + 400 = 1150 centimes = 11.5 €
- 51 KW => 30 * 25 + 20 * 20 + 1 * 15 = 750 + 400 + 15 = 1165 centimes = 11.65 €
- 60 KW => 30 * 25 + 20 * 20 + 10 * 15 = 750 + 400 + 150 = 1300 centimes = 13 €
- 70 KW => 30 * 25 + 20 * 20 + 20 * 15 = 750 + 400 + 300 = 1450 centimes = 14.5 €
- 71 KW => 30 * 25 + 20 * 20 + 20 * 15 + 1 * 10 = 750 + 400 + 300 + 10 = 1460 centimes = 14.6 €
- 80 KW => 30 * 25 + 20 * 20 + 20 * 15 + 10 * 10 = 750 + 400 + 300 + 100 = 1550 centimes = 15.5 €
*/

const kwConsomme = parseInt(prompt("Entrez le nombre de kw consommé"));

// Coût par tranche de KW
const coutPremiereTranche = 25;  // 0 à 30 KW
const coutDeuxiemeTranche = 20;  // 31 à 50 KW
const coutTroisiemeTranche = 15; // 51 à 70 KW
const coutQuatriemeTranche = 10; // À partir de 71 KW

let prix = 0;

if (!isNaN(kwConsomme)){
    if (kwConsomme <= 30){
        prix = kwConsomme * 25
    } else if (kwConsomme <= 50){
        prix = 30 * coutPremiereTranche + (kwConsomme - 30) * coutDeuxiemeTranche
    } else if (kwConsomme <= 70) {
        prix = 30 * coutPremiereTranche + 20 * coutDeuxiemeTranche + (kwConsomme - 50) * coutTroisiemeTranche
    } else {
        prix = 30 * coutPremiereTranche + 20 * coutDeuxiemeTranche + 20 * coutTroisiemeTranche + (kwConsomme - 70) * coutQuatriemeTranche
    }
    const prixEnEuros = prix / 100
    console.log(`${prixEnEuros} €`);
} else{
    console.log("Error, Valeur non valide")
}



