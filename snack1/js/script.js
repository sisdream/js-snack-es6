// COSTANTE VIPS

const vips = [
    "Dwayne Johnson",
    "Brad Pitt",
    "Johnny Depp",
    "Lady Gaga",
    "Cristiano Ronaldo",
    "Georgina Rodriguez",
    "Chiara Ferragni",
    "Fedez",
    "George Clooney",
    "Amal Clooney",
    "Maneskin",
];
  
// METODO ARRAY MAP
let tableI = 0;
const vipTable = vips.map((vip) =>{
    tableI++;
    return{
        table:"Tavolo di " + vip,
        vipName: vip,
        tableNumber: tableI,
    };
});
console.log(vipTable);