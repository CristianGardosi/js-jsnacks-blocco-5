$(document).ready(function () {

// JSnack 1 ******************************************
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.
var bikes = [
    {
        nome: 'Pinarello',
        peso: 12
    },
    {
        nome: 'Bianchi',
        peso: 10
    },
    {
        nome: 'Europa',
        peso: 14
    }

];
// Creo una variabile a cui assegno un valore di default (il primo elemento dell'array) che poi andrò a modificare dinamicamente confrontando i pesi degli altri elementi
var lighterBike = bikes[0];
// Ciclo for per iterare tra tutti gli alementi dell'array a partire dal secondo elemento (1) perchè il primo già l'ho inserito nella variabile lighterBike
for (var i = 1; i < bikes.length; i++) {

    if ( bikes[i].peso < lighterBike.peso ) {
        lighterBike = bikes[i];
    }

}
console.log(lighterBike);


// HANDLEBARS SECTION

// Targhettizzo l'id dello script handlebars
var source = $("#bike-template").html();
// Var che prenderà i miei dati dinamici e li convertirà in html riempiendo i relativi placeholder (collega di fatto JS e HTML)
var template = Handlebars.compile(source);

// STAMPA RISULTATI
// Settiamo il template (targhettizziamo in una var i placeholder che vanno popolati e con cosa)
var data = {
    nome: lighterBike.nome,
    peso: lighterBike.peso
};
// Compiliamo il template inserendo i dati
var html = template(data);
// Inserimento vero e proprio nell'html
$('.bike-container').append(html);






// JSnack 2 ******************************************
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.







// JSnack 3 ******************************************
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.




}); // End document ready