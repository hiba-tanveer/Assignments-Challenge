let transports: string[] = ["Lamborghini", "Pagani Huayra", "Hillux"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});

let guests: string[] = ["Salar Sikandar", "Umer Hayat", "Halay Sultan", "Meeran jaah", "Shah Zamani", "Ayeshy gul"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

let unableToAttend = "Shah Zamani";
console.log(`${unableToAttend} can't make it to dinner.`);

//Replace the guest
let newGuest = "Ain ul Haya";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New Invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});