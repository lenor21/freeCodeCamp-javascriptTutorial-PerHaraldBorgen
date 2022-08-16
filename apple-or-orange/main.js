let fruit = [
	"apple",
	"orange",
	"apple",
	"orange",
	"apple",
	"orange",
	"orange"
]
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruit() {
	for (let i = 0; i < fruit.length; i++){
		if (fruit[i] === "apple") {
			appleShelf.textContent += fruit[i] + " ";
		} else {
			orangeShelf.textContent += i + " ";
		}
	}
}

sortFruit();