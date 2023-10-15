/*****************************
* 16 - L'opérateur ternaire et l'instruction Switch
*/

/* 
Initalisez la variable firstName à John et la variable age à 14
*/

let firstName = 'John';
let age = 14;

// 16 - 1. L'opérateur ternaire


/*
1. Écrivez une expression ternaire pour afficher "John boit des bières" ou "John boit des jus" selon qu'il est majeur ou pas.
2. Testez en changeant l'âge de John (14 ans, 24 ans)
*/


// Utilisez l'opérateur ternaire pour afficher le message approprié
const message = (age >= 18) ? "John boit des bières." : "John boit des jus.";

console.log(message);



/*
MEILLEURE PRATIQUE : utiliser l'expression ternaire pour affecter une valeur ou une autre valeur à une variable selon qu'une condition est remplie ou pas
1. Affecter, selon qu'on est majeur ou pas, la valeur "bières" ou la valeur "jus" à la variable drink 
2. Afficher "John boit des …" (l'affichage s'adapte à l'âge de John, tester différents cas)
*/


// Utilisation de l'expression ternaire pour affecter la valeur "bières" ou "jus" à la variable drink
let drink;

drink = (age >= 18) ? "bières" : "jus";

console.log(`John boit des ${drink}.`);

/* Faites la même chose en utilisant un if / else */

// Utilisation d'une structure if / else pour affecter la valeur "bières" ou "jus" à la variable drink


if (age >= 18) {
    drink = "bières";
} else {
    drink = "jus";
}
console.log(`John boit des ${drink}.`);


// 16 - 2. L'instruction Switch

// a) Switch avec des break

/* 
1. Initialisez la variable job à la valeur "instituteur"
2. Utilisez un switch pour affciher :
	- si la profession est professeur ou instituteur, "John enseigne la programmation aux enfants",
	- si c'est chauffeur, "John conduit un taxi à Lisbonne",
	- si c'est designer, "John conçoit de beaux sites web" et,
	- dans tous les autres cas, "John fait autre chose"
3. Testez les différents cas de figure en changeant la profession de John
*/

const job = "instituteur";

switch (job) {
    case "professeur":
    case "instituteur":
        console.log("John enseigne la programmation aux enfants.");
        break;
    case "chauffeur":
        console.log("John conduit un taxi à Lisbonne.");
        break;
    case "designer":
        console.log("John conçoit de beaux sites web.");
        break;
    default:
        console.log("John fait autre chose.");
}



/* 
1. John a vielli : il a à présent 56 ans…
2. Utilisez un switch pour affciher :
  - si l'âge est inférieur à 13, "John est un garçon",
  - entre 13 et 20 ans, "John est un adolescent",
  - entre 20 et 30 ans, "John est un jeune homme"
  - et sinon "John est un homme".
3. Testez les différents cas de figure en changeant l'âge de John
4. Testez avec un âge de 7 ans en enlevant la 2e instruction break pour voir ce que cela a comme impact
*/


age = 56;

switch (true) {
    case age < 13:
        console.log("John est un garçon.");
        break;
    case age >= 13 && age <= 20:
        console.log("John est un adolescent.");
        break;
    case age > 20 && age <= 30:
        console.log("John est un jeune homme.");
        break;
    default:
        console.log("John est un homme.");
}



// Autre application de l'instruction switch

/*
1. Demandez à l'utilisateur d'entrer l'information
  "Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
  soleil, vent, pluie ou neige."
2. Stockez cette information dans une variable meteo
3.	a) s'il fait soleil, affichez le message "Sortez en t-shirt."
	b) s'il y a du vent, affichez "Sortez en pull."
	c) s'il pleut, affichez "Sortez en blouson."
	d) s'il neige, affichez "Restez au chaud à la maison."
	e) dans tous les autres cas (si la personne n'a rien répondu de tout ça
  	— c.-à-d. qu'elle n'a entré aucun de ces qautre mots-là),
 	 affichez "Je n'ai pas compris !"
*/

let meteo = prompt("Quel temps fait-il dehors ? Répondez par un des quatre mots suivants : soleil, vent, pluie ou neige.");

switch (meteo.toLowerCase()) {
    case "soleil":
        console.log("Sortez en t-shirt.");
        break;
    case "vent":
        console.log("Sortez en pull.");
        break;
    case "pluie":
        console.log("Sortez en blouson.");
        break;
    case "neige":
        console.log("Restez au chaud à la maison.");
        break;
    default:
        console.log("Je n'ai pas compris !");
}

// b) Switch sans break

meteo = prompt("Quel temps fait-il dehors ? Répondez par un des quatre mots suivants : soleil, vent, pluie ou neige.");

switch (meteo.toLowerCase()) {
    case "soleil":
        console.log("Sortez en t-shirt.");
    case "vent":
        console.log("Sortez en pull.");
    case "pluie":
        console.log("Sortez en blouson.");
    case "neige":
        console.log("Restez au chaud à la maison.");
    default:
        console.log("Je n'ai pas compris !");
}


// L'instruction `break` fait sortir du bloc du switch.  On ne souhaite pas toujours sortir, dans ce cas, on peut ne pas mettre de `break`

/* 
1. Demandez à l'utilisateur d'entrer le numéro du jour de la semaine
2. Affichez ensuite dans la console le message suivant : "Les jours suivants se sont déjà écoulés depuis le début de la semaine : …, …, …"
*/

let jourNumero = parseInt(prompt("Entrez le numéro du jour de la semaine (1 pour lundi, 2 pour mardi, etc.) :"));

switch (jourNumero) {
    case 1: // lundi
        console.log("Les jours suivants se sont déjà écoulés depuis le début de la semaine : Premier jour de la semaine");
        break;
    case 2: // mardi
        console.log("Les jours suivants se sont déjà écoulés depuis le début de la semaine : lundi");
        break;
    case 3: // mercredi
        console.log("Les jours suivants se sont déjà écoulés depuis le début de la semaine : lundi, mardi");
        break;
    case 4: // jeudi
        console.log("Les jours suivants se sont déjà écoulés depuis le début de la semaine : lundi, mardi, mercredi");
        break;
    case 5: // vendredi
        console.log("Les jours suivants se sont déjà écoulés depuis le début de la semaine : lundi, mardi, mercredi, jeudi");
        break;
    case 6: // samedi
        console.log("Les jours suivants se sont déjà écoulés depuis le début de la semaine : lundi, mardi, mercredi, jeudi, vendredi");
        break;
    case 7: // dimanche
        console.log("Les jours suivants se sont déjà écoulés depuis le début de la semaine : lundi, mardi, mercredi, jeudi, vendredi, samedi");
        break;
    default:
        console.log("Numéro de jour de la semaine invalide. Veuillez entrer un numéro entre 1 et 7.");
}

/* Ici, toutes les instructions "console.log" entre la ligne case:… et l'instruction break seront exécutées, et on obtient donc une liste de jours. Notez bien qu'il faut quand même un break avant le default, sans quoi ce message d'erreur apparaîtra toujours à la fin de notre liste de jours… Notez qu'on aurait pu aussi écrire le default en premier, suivi d'un break puis la liste de tous les case. */

jourNumero = parseInt(prompt("Entrez le numéro du jour de la semaine (1 pour lundi, 2 pour mardi, etc.) :"));

switch (jourNumero) {
    case 1: // lundi
        console.log("Les jours suivants se sont déjà écoulés depuis le début de la semaine : Premier jour de la semaine");
    case 2: // mardi
        console.log("lundi");
    case 3: // mercredi
        console.log("lundi, mardi");
    case 4: // jeudi
        console.log("lundi, mardi, mercredi");
    case 5: // vendredi
        console.log("lundi, mardi, mercredi, jeudi");
    case 6: // samedi
        console.log("lundi, mardi, mercredi, jeudi, vendredi");
    case 7: // dimanche
        console.log("lundi, mardi, mercredi, jeudi, vendredi, samedi");
        break;
    default:
        console.log("Numéro de jour de la semaine invalide. Veuillez entrer un numéro entre 1 et 7.");
}


// Un cas d'utilisation concret très utile pour un switch

/* Switch peut sembler curieux, mais dans certaines situations, il est particulièrement utile. Par exemple, imaginez un script qui accepte la saisie au clavier et l'utilise pour déplacer un sprite – beaucoup de jeux vous demanderont d''utiliser les touches fléchées ou les touches A et D pour vous déplcaer de gauche à droite. En JavaScript, les pressions de touches sont représentées par un objet d'événement (que nous aborderons un peu plus loin dans le cours) avec une propriété contenant une valeur numérique qui correspond à la touche pressée. Par exemple, la lettre A est représentée par le code 65, la flèche gauche par le code 37, etc.
Voici un canevas de code qui permettrait de gérer les déplacements grâce aux touches */


