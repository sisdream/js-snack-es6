// CREATO ARRAY OGGETTI
const bici =[
    {
        nome: "focus",
        peso: 2.00,
    },
    {
        nome: "gazelle",
        peso: 3.00,
    },
    {
        nome: "yeti",
        peso: 4.50,
    },
    {
        nome: "look",
        peso: 2.30,
    },
    {
        nome: "scott",
        peso: 3.20,
    },
]

const stampa = document.getElementById("stampa");

//CREO UNA VARIABILE E ASSOCIO IL VALORE DI PARTENZA
let pesoKg = bici[0];

//CREO UN CICLO FOR PER TROVARE IL VALORE MINIMO
for (let i = 1; i < bici.length; i++) {
    if (bici[i] < pesoKg) {
      pesoKg = bici[i];
    };
}

//FACCIO IL DESTRUCTURING E STAMPO
const { nome, peso } = pesoKg;
console.log(`La bici da corsa "${nome}" è la più leggera con un peso di ${peso} kg.`);

stampa.innerText = `La bici da corsa "${nome}" è la più leggera con un peso di ${peso} kg.`;