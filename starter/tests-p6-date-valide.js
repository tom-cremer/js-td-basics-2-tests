


/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/

/* Aide supplémentaire
 - Vous pouvez stocker dans une varaible maxJours le nombre de jours autorisés pour chaque mois :
	 - traiter le cas du mois de février où ce sera 28 ou 29 selon que l'année est bissextile ou pas ;
	 - puis traiter les cas où ce sera 30 ;
	 - dans les autres cas, c'est 31 ;
 - Il ne reste plus ensuite qu'à comparer le jour entré par l'utilisateur avec maxJour pour retourner true ou fasle
  selon que la date est valide ou pas.
  */

/*
- si l'annee est bissextile ou pas
- si le nombre de mois est entre 1 et 12 et verifier le nombre de jour qu'ils peut y avoir (28/29 ou 30/31)
- si le jour est bien compris entre 28/29 ou 30/31

classe:
1.
 - isNaN()
 - jour entre 1 et 31
 - mois 1 et 12
 - annee > 0

2.
 - Vérifier les mois de -31 jours

2.1.
 - Attention au mois de février pour année bissextile

*/


const jour = parseInt(prompt("Entrez le jour: "));
const mois = parseInt(prompt("Entrez le mois: "));
const annee = parseInt(prompt("Entrez le annee: "));
let isValide = true;

if (isNaN(jour) || isNaN(mois) || isNaN(annee)) {
    isValide = false;
}
if (jour < 1 || jour > 31) {
    isValide = false;
}
if (mois < 1 || mois > 12) {
    isValide = false;
}
if (annee < 1) {
    isValide = false;
}

let isBissextile = false;
if (((year % 4 === 0 ) && !(year % 100 === 0)) || year % 400 === 0) {
    isBissextile = true;
}
switch (mois) {
    case 2:
        if (isBissextile){
            if (jour > 29){
                isValide = false;
            }
        } else {
            if (jour > 28){
                isValide = false;
            }
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if (jour > 30) {
            isValide = false;
        }
}



