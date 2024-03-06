// Hiba, 06-03-2024
// This program prints a personal message
let myname: string = "Hiba";
console.log(`Assalam o Alaikum warahmatullahi wa barakatuh ${myname}, Hope you're in the best state of Iman and Health!`);

let names: string[] = ["Humna Khan", "Aqsa Sajid", "Zubi dubious", "Samin", "Syeda Saba Noor", "Noor us Sabah"];
for (let i=0; i < names.length; i++) {
    console.log(names[i]);
}
for (let name of names) {
    console.log(`Assalam o Alaikum warahmatullahi wa barakatuh ${name}, May Malik e Kun Faya Kun blessed you with the BESTEST!`);
}