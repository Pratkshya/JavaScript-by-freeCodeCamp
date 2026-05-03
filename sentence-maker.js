
let adjective = "cruel";
let noun = "sansa";
let verb = "happy";
let place = "westcoast";
let adjective2 = "brave";
let noun2 = "cerci";

let firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

//once declared, no need to re-declare
adjective = "brave";
noun = "arya";
verb = "sad";
place = "winterhell";
adjective2 = "lier";
noun2 = "shae";

let secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`First story: ${firstStory}`);
console.log(`Second story: ${secondStory}`);