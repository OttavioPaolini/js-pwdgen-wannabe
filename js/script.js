// INPUT

const userName = prompt("Inserire nome");
console.log(userName);

const userLastName = prompt("Inserire cognome");
console.log(userLastName);

const userPreferColor = prompt("Inserire colore preferito")
console.log(userPreferColor);

// PROCESS

const userPsw = `${userName}${userLastName}${userPreferColor}21`;
console.log(userPsw);

// OUTPUT

document.getElementById("pswGen").innerHTML = userPsw