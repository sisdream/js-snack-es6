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

const vipTable = vips.map((vip, index) => {
    return {
      table: "Tavolo di " + vip,
      vipName: vip,
      tableNumber: index,
    };
});                 
  
console.log(vipTable);