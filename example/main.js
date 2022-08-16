//======================BLACK JACK=======================


/*let hands = ["rock", "paper", "scissors"];

function randomArray() {
	let randomHands = Math.floor(Math.random() * 3);
	return hands[randomHands];
}

console.log(randomArray());

/*let dayOfMonth = 13;
let weekDay = "Friday";

if (dayOfMonth === 12 && weekDay === "Friday") {
	console.log("scary face");
} else {
	console.log("happy friend");
}
=====================================================================
/*let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
let pakistan = "Pakistan";
let china = "China";

largeCountries.shift();
largeCountries.unshift(china);
largeCountries.pop();
largeCountries.push(pakistan);

console.log(largeCountries);
==================================================================
/*let largeCountries = ["china", "india", "USA", "Indonesia", "Pakistan"]

for (let i = 0; i < largeCountries.length; i++) {
	console.log(largeCountries[i]);
}
====================================================================
/*let age = 50;

function ageDiscount() {
	if (age < 7) {
		console.log("free");
	} else if (age < 18) {
		console.log("Child discount");
	} else if (age < 27) {
		console.log("Student discount");
	} else if (age < 67) {
		console.log("Full price");
	} else {
		console.log("Senior citizen");
	}
}

ageDiscount();
================================================================
/*let person = {
	name: "ronel",
	age: 22,
	country: "Philippines"
}

let greetingEl = document.getElementById("greeting-el");

function logData() {
	//console.log(person.name, "is", person.age, "years old and lives in", person.country);
	greetingEl.textContent = person.name + " is " + person.age + " years old and lives in " + person.country;
}
================================================================
/*let castle = {
	name: "ron",
	age: 22,
	handsome: true,
	hobby: ["design", "draw"]
}

console.log(castle.name);
console.log(castle.hobby);
=================================================================
/*let likeDocumentaries = true;
let likeStartups = true;

if (likeDocumentaries === true || likeStartups === false) {
	recommendMovie();
}
 function recommendMovie() {
 	console.log("Money Heist");
 }
==================================================================
/*let hasSolvedTheChallenge = false;
let hasHintsLeft = false;

function showSolution() {
	console.log("Showing Solution....");
}

if (hasSolvedTheChallenge === false && hasHintsLeft === false) {
	showSolution();
}

//let randomNumber = Math.random() * 6;
//let randomNumber = Math.floor(Math.random()*6);

//console.log(randomNumber);
===================================================================
/*function randomNumber() {
	return Math.floor( Math.random() * 6 ) + 1;
}
console.log(randomNumber());
/*let firstRaceTime = 76;
let secondRaceTime = 50;

function getRaceTime() {
	return firstRaceTime + secondRaceTime;
}

let totalRaceTime = getRaceTime();
console.log(totalRaceTime);
=================================================================
/*let sentence = ["hello", "my", "name", "is", "per"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
	greetingEl.textContent += sentence[i] + " ";
}
==============================================================
/*let cards = [2, 4, 6]

for (let i = 0; i < cards.length; i += 1) {
	console.log(cards[i]);
}
=============================================================
/*let message = [
	"hello",
	"i am",
	"ronel",
	"talavera",
	"dejesus"
]

for (let i = 0; i < message.length; i += 1) {
	console.log(message[i]);
}
==============================================================
/*let newMessage = "de jesus";

message.push(newMessage);
console.log(message);

message.pop();
console.log(message);
=================================================================
/*let firstNumber = 9;
let secondNumber = 10;
let sum = firstNumber + secondNumber + 2;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
	if (sum <= 20) {
	message = "Do you want to draw a new card?";
} else if (sum === 21) {
	message = "Wohooo, You've got Blackjack!";
	hasBlackjack = true;
} else {
	message = "You're out of the game!";
	isAlive = false;
}

//console.log(hasBlackjack);
//console.log(message);
messageEl.textContent = message;
sumEl.textContent = sumEl.textContent + sum;
}*/