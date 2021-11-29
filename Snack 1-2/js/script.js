// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.


// Array di nomi
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


// Variabili contenenti i numeri min e max
const min = 1;
const max = 5;


// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.

// Tramite ciclo forEach
// const newIndexArray = [];
// myArray.forEach((element, index, array) => {
//     // console.log(element);
//     if(index > min && index < max) {
//         newIndexArray.push(element);
//     }
// });

// console.log(newIndexArray);



// Tramite filter
const newIndexArray = myArray.filter((element, index, array) => {
    return index > min && index < max;
});

console.log(newIndexArray);