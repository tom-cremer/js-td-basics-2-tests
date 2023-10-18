/*
TESTS - PRÉPA 2 : Les restos du cœur
Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.
Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.
*/

/* Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/

const montantAchat = parseInt(prompt("Montant d'achat: "));
const remisePourcentage = 10
let montantRemise = 0;
let don = 0;
const donMaximum = 2;

if (!isNaN(montantAchat)) {
    if (montantAchat > 25) {
        montantRemise = montantAchat * (remisePourcentage / 100);

        if (montantRemise > 5) {

            don = montantRemise * (remisePourcentage / 100);

            if (don >= 2) {
                don = donMaximum;
            }
        }
    }

    console.log(`montant Remise ${montantRemise} €`);
    console.log(`Montant d'Achat ${montantAchat} €`);
    console.log(`Montant Versés ${don.toFixed(2)} €`)

} else {
    console.log("Error, Only number are allowed")
}