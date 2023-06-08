// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for(let i=0; i<pieces.length; i++){
const article = pieces[i];
//Récupération de l'élément du DOM qui accueillera les fiches
const sectionFiches = document.querySelector(".fiches");

// Création d'une balise dédiée à 1 pièce auto
const pieceElement = document.createElement("article");

// Création des balise
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite ? "En stock" : "En Rupture de stock pour le moment.";


// Attachement de la balise 'article' à la section Fiches
sectionFiches.appendChild(pieceElement);
// Attachement des éléments pieceElement à la balise 'article'
pieceElement.appendChild(imageElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(disponibiliteElement);
}

// Gestion des boutons
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     console.log(piecesOrdonnees);
 });

 const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});

// Bouton décroissant et sans descript
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
     });
     console.log(piecesOrdonnees);
 });

 const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description;
     });
     console.log(piecesFiltrees);
 });