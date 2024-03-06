var transports = ["Lamborghini", "Pagani Huayra", "Hillux"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
var guests = ["Salar Sikandar", "Umer Hayat", "Halay Sultan", "Meeran jaah", "Shah Zamani", "Ayeshy gul"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
var unableToAttend = "Shah Zamani";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//Replace the guest
var newGuest = "Ain ul Haya";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New Invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
