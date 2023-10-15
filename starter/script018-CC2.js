/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)

4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.

5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus

// Scores de John et Mike
const scoresJohn = [89, 120, 103];
const scoresMike = [116, 94, 123];

// Calcul du score moyen
const moyenneJohn = (scoresJohn[0] + scoresJohn[1] + scoresJohn[2]) / 3;
const moyenneMike = (scoresMike[0] + scoresMike[1] + scoresMike[2]) / 3;

// Décision de l'équipe gagnante
if (moyenneJohn > moyenneMike) {
    console.log(`L'équipe de John gagne avec un score moyen de ${moyenneJohn} points.`);
} else if (moyenneMike > moyenneJohn) {
    console.log(`L'équipe de Mike gagne avec un score moyen de ${moyenneMike} points.`);
} else {
    console.log(`C'est un match nul avec un score moyen de ${moyenneJohn} points pour les deux équipes.`);
}


// avec bonus

// Scores de John, Mike et Mary
const scoresJohn1 = [89, 120, 103];
const scoresMike1 = [116, 94, 123];
const scoresMary1 = [97, 134, 105];

// Calcul du score moyen
const moyenneJohn1 = (scoresJohn1[0] + scoresJohn1[1] + scoresJohn1[2]) / 3;
const moyenneMike1 = (scoresMike1[0] + scoresMike1[1] + scoresMike1[2]) / 3;
const moyenneMary1 = (scoresMary1[0] + scoresMary1[1] + scoresMary1[2]) / 3;

// Décision de l'équipe gagnante
if (moyenneJohn1 > moyenneMike1 && moyenneJohn1 > moyenneMary1) {
    console.log(`L'équipe de John gagne avec un score moyen de ${moyenneJohn1} points.`);
} else if (moyenneMike1 > moyenneJohn1 && moyenneMike1 > moyenneMary1) {
    console.log(`L'équipe de Mike gagne avec un score moyen de ${moyenneMike1} points.`);
} else if (moyenneMary1 > moyenneJohn1 && moyenneMary1 > moyenneMike1) {
    console.log(`L'équipe de Mary gagne avec un score moyen de ${moyenneMary1} points.`);
} else {
    console.log(`C'est un match nul avec un score moyen de ${moyenneJohn1} points pour les trois équipes.`);
}

