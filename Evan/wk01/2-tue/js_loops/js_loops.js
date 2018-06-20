// fortune teller
console.log("Fortune Teller");
var numberOfChildren = 0;
var partnersName = "Nathalie";
var geographicLocation = "America";
var jobTitle = "Student";

console.log("You will be a " + jobTitle + " in " + geographicLocation + ", married to " + partnersName + " with " + numberOfChildren + " kids.");

// age calculator
console.log("\n" + "Age Calculator");
var setDate = new Date();
var currentYear = setDate.getFullYear();
var birthYear = 1995;

console.log("They are either " + ((currentYear - birthYear) - 1) + " or " + (currentYear - birthYear));

// lifetime supply calculator
console.log("\n" + "Lifetime Supply Calculator");
var currentAge = 22;
var maximumAge = 100;
var dailyBananas = 2;

console.log("You will need " + ((maximumAge - currentAge) * 365) + " bananas to last you until the ripe old age of " + maximumAge);

// even/odd reporter
console.log("\n" + "Even/Odd Reporter");
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// multiplication tables
console.log("\n" + "1 to 10 times 9");
for (var i = 0; i <= 10; i++) {
  console.log(i + " * 9 = " + (i * 9));
}

// nested for loop of every multiplier from 1-10
console.log("\n" + "10 by 10 Multiplication tables");
for (var x = 1; x <= 10; x++) {
  for (var y = 1; y <= 10; y++) {
    console.log(x + " * " + y + " = " + (x * y));
  }
}

// array holding favorite bike frame brands
console.log("\n" + "Favorite Bike Frame Brands");
var frameBrand = [
  "3Rensho",
  "Cinelli",
  "Fuji",
  "brakebrake17",
  "Cannondale",
  "Dosnoventa",
  "Dolan",
  "Colnago",
  "8bar",
  "Engine11",
  "Leader",
  "Affinity",
  "Surly",
  "Specialized",
  "State",
  "BMC",
  "Mash",
  "All-City",
  "Anchor",
  "Crew",
  "Mercier",
  "Masi",
  "No. 22"
];

// log array to the screen with correct suffix
for (var i = 0; i < frameBrand.length; i++) {
  if ((i + 1) >= 10 && (i + 1) <= 20) {
  console.log((i + 1) + "th is " + frameBrand[i]);
  }
    else if ((i + 1) % 10 === 1) {
    console.log((i + 1) + "st is " + frameBrand[i]);
  } else if ((i + 1) % 10 === 2) {
    console.log((i + 1) + "nd is " + frameBrand[i]);
  } else if ((i + 1) % 10 === 3) {
    console.log((i + 1) + "rd is " + frameBrand[i]);
  } else {
    console.log((i + 1) + "th is " + frameBrand[i]);
  }
}
