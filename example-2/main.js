let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", "google.com");
console.log(localStorage.getItem("myLeads"));

/*const recipient = "Ronel";
const sender = "De Jesus";

const email = `Hey ${recipient}
How is it going? 
cheers ${sender}!
`;
console.log(email);

const container = document.getElementById("container");

container.innerHTML = "<button onclick='render()'>Buy!</button>";

function render() {
	container.innerHTML += "<p>Thank you for buying!</p>";
}

let boxEl = document.getElementById("box-el");

boxEl.addEventListener("click", function() {
	boxEl.textContent = "I want to open the box";
});