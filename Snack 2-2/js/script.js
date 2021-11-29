// Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


let students = 
[
    { 
        name: 'Marco', 
        id: 213, 
        grades: 78
    },
    { 
        name: 'Paola', 
        id: 110, 
        grades: 96
    },
    { 
        name: 'Andrea', 
        id: 250, 
        grades: 48
    },
    { 
        name: 'Gaia', 
        id: 145, 
        grades: 74
    },
    { 
        name: 'Luigi', 
        id: 196, 
        grades: 68
    },
    { 
        name: 'Piero', 
        id: 102, 
        grades: 50
    },
    { 
        name: 'Francesca', 
        id: 120, 
        grades: 84
    }
];
// for(let i = 0; i < students.length; i++) {
//     const thisItem = students[i];
//     console.log(thisItem);
// }



// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.

// Creo il nuovo array di stringhe che conterrà il nome dello studente tutto in maiuscolo
const studentsUpperCase = students.map((element, index, array) => {
    // console.log(element);

    // Restituisco il nome dello studente in maiuscolo
    return element.name.toUpperCase(); 
});

console.log(studentsUpperCase);



// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
const studentsGradesOver70 = students.filter((element, index, array) => {
    return element.grades > 70;
});

console.log(studentsGradesOver70);



// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const gradesOver70AndIdOver120 = students.filter((element, index, array) => {
    return element.grades > 70 && element.id > 120;
});

console.log(gradesOver70AndIdOver120);