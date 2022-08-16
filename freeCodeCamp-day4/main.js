let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
//localStorage.setItem("ronel", "ronel de jesus");
//console.log(localStorage.getItem("ronel"));
//localStorage.clear()

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	render(myLeads);
}

function render(leads) {
	let listItem = "";
	for (let i = 0; i < leads.length; i++) {
		//listItem += "<li><a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>";
		listItem += `
			<li>
				<a target="_blank" href='${leads[i]}'>
					${leads[i]}
				</a>
			</li>
		`
	/*const li = document.createElement("li");
	li.textContent = myLeads[i];
	ulEl.append(li);*/
	}
ulEl.innerHTML = listItem;
//console.log(listItem);
}

deleteBtn.addEventListener("dblclick", function() {
	console.log("double clicked")
	localStorage.clear();
	myLeads = [];
	render(myLeads);
})

/*myLeads = JSON.parse(myLeads);
myLeads.push("ronjay de jesus");
myLeads = JSON.stringify(myLeads);
console.log(typeof myLeads);*/

inputBtn.addEventListener("click", function() {
	//console.log("Button Clicked!");
	myLeads.push(inputEl.value);
	inputEl.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
	console.log(localStorage.getItem("myLeads"));
})