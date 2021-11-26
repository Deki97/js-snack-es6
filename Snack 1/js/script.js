// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM




// [x] Creare un array di oggetti:
// [x] Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bicycles = 
[
    {
        nome: 'Atala',
        peso: 13
    },
    {
        nome: 'Basso',
        peso: 8
    },
    {
        nome: 'Battaglin',
        peso: 5
    },
    {
        nome: 'Bianchi',
        peso: 12
    },
    {
        nome: 'Bottecchia',
        peso: 7
    },
    {
        nome: 'Cannondale',
        peso: 14
    },
    {
        nome: 'Carrera',
        peso: 11
    },
    {
        nome: 'Chesini',
        peso: 9
    }
];

// Creo una variabile che conterrà la bici con peso minore ad ogni ciclo, confrontandola con tutti gli oggetti dell'array 
let currentLighterBike = bicycles[0];



// [x] Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

// Tramite un ciclo for scorro tutto l'array di oggetti e confronto il peso delle biciclette
// Se il peso dell'oggetto thisBike è inferiore al peso di currentLighterBike, riassegno la variabile currentLighterBike
for(let i = 0; i < bicycles.length; i++) {
    const thisBike = bicycles[i];

    if(thisBike.peso < currentLighterBike.peso) {
        currentLighterBike = thisBike;
    }
}


// DESTRUCTURING
const {nome, peso} = currentLighterBike;


// TEMPLATE LITERAL PER STAMPARE NELL'HTML LA BICI CON IL PESO MINORE
const bikeHTML = `
<h3>${nome}</h3>

<span>${peso}</span>
`;

const bicycleContainer = document.getElementById('bicycle-container');
bicycleContainer.innerHTML = bikeHTML;