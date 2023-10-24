//your JS code here. If required.
const mybtn = document.getElementById("enterBtn");
mybtn.addEventListener("click", change);
const para = document.getElementById("status");
function change(){
	para.textContent = "";
	const changedElement = document.createElement("h1");
	changedElement.textContent = "Entered Metaverse";
	para.appendChild(changedElement);
}