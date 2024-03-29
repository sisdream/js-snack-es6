const teams = [
    {
      name: 'Team Turtle',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Frog',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Penguin',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Hippopotamus',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Seal',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Crocodile',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Dolphin',
      score: 0,
      foul: 0,
    },
  ];

const stampa = document.getElementById("stampa");

//CREO UNA FUNZIONE PER GENERARE UN NUMERO RANDOMICO
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//ASSOCIO ALLE CHIAVI UN NUMERO RANDOMICO, UTILIZZANDO IL FOR-EACH
teams.forEach((elem) => {
elem.punti_fatti = randomNumber(1, 120);
elem.falli_presi = randomNumber(1, 60);
});

//CREO UN NUOVO ARRAY E RESCRIVO I NUOVI VALORI UTILIZZANDO IL MAP
const teamsEnd = teams.map(({ name, falli_presi }) => ({ name, falli_presi }));
console.log(teamsEnd);
