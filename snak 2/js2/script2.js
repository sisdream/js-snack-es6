// CONST STUDENTI
const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
]

// METODO MAP NOMI MAIUSCOLI

const newStudents = students.map((student) => student.name.toUpperCase());
console.log("Nomi in maiuscolo: " + newStudents);

// METODO FILTER STUDENTI CON PIU' DI 70

const settanta = students.filter((student) => student.grades >= 70);
console.log(settanta);

// METODO FILTER STUDENTI CON PIU' DI 70 E CON ID SUPERIORE A 120

const maggioriSettanta = students.filter(
    (student) => student.grades >= 70 && student.id >= 120
);
console.log(maggioriSettanta);

