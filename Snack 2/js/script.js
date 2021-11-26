// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




// [x] Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// [x] Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const footballTeams = 
[
    {
        name: 'Juventus',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Inter',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Napoli',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Lazio',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Atalanta',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Fiorentina',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Torino',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Sampdoria',
        pointsMade: 0,
        foulsSuffered: 0
    }
];



// [x] Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

// Ciclo tutti gli oggetti tramite un for e genero per ogni oggetto un numero random per le proprietà punti fatti e falli subiti
// Mi creo il nuovo array che poi conterrà solo nomi e falli subiti, e lo stamperò in console
const newTeamsArray = [];
for(let i = 0; i < footballTeams.length; i++) {
    let thisTeam = footballTeams[i];

    // Genero i numeri random per le proprietà punti fatti e falli subiti richiamando la funzione getRndInteger
    const thisTeamPointsMade = getRndInteger(0, 100);
    const thisTeamFoulsSuffered = getRndInteger(0, 100);

    // Aggiorno il valore delle proprietà a 0 sostituendole con i numeri che ho appena generato
    thisTeam.pointsMade = thisTeamPointsMade;
    thisTeam.foulsSuffered = thisTeamFoulsSuffered;

    // console.log(thisTeam);


// [x] Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
    const {name, foulsSuffered} = thisTeam;

    const onlyNameAndFouls = {
        name,
        foulsSuffered
    };

    newTeamsArray.push(onlyNameAndFouls);

}

// Stampo l'array originale con le proprietà punti fatti e falli subiti generate con numeri random
console.log(footballTeams);

// Infine stampo a console il nuovo array contenente solo nomi e falli subiti
console.log(newTeamsArray);




// -------------------------------------
// FUNCTIONS
// -------------------------------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }