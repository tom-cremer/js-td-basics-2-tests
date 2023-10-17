/*
TESTS - PRÉPA 1
Ecrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/

const nbrArticle = parseInt(prompt("Combien d'article voulez-vous acheter? "));
const prixArticle = 10; //10 Euros
const ristourneArticle = 20; // nombre d'article pour avoir la ristourne
const ristournePourcentage = 10; // Pourcentage de la ristoure

const tvaPourcentage = 21;

// Calcul du montant total avant réduction(s)
const montantAvantRistourne = nbrArticle * prixArticle;

// Vérification si la réduction s'applique
if (nbrArticle >= ristourneArticle) {
    // Calcul du montant de réduction
    const montantRistourne = (ristournePourcentage / 100) * montantAvantRistourne;

    // Calcul du montant total après réduction
    const montantApresRistourne = montantAvantRistourne - montantRistourne;

    // Calcul du montant de TVA
    const montantTVA = (tvaPourcentage / 100) * montantApresRistourne;

    // Calcul du montant total à payer
    const montantTotal = montantApresRistourne + montantTVA;

    console.log(`Montant total avant réduction : ${montantAvantRistourne} Euros`);
    console.log(`Montant de réduction (${ristournePourcentage}% de réduction) : ${montantRistourne} Euros`);
    console.log(`Montant total après réduction : ${montantApresRistourne} Euros`);
    console.log(`Montant de TVA (${tvaPourcentage}% de TVA) : ${montantTVA} Euros`);
    console.log(`Montant total à payer : ${montantTotal} Euros`);
} else {
    // Si le client n'a pas droit à la réduction
    const montantTVA = (tvaPourcentage / 100) * montantAvantRistourne;
    const montantTotal = montantAvantRistourne + montantTVA;

    console.log(`Montant total avant réduction : ${montantAvantRistourne} Euros`);
    console.log(`Montant de TVA (${tvaPourcentage}% de TVA) : ${montantTVA} Euros`);
    console.log(`Montant total à payer : ${montantTotal} Euros`);
}
