// pifdom.js
function pifagorTable() {
	var i, j, prod;
	var main = document.getElementById("main");

	// pifagorTable
	for (i = 1; i <= 9; i++) {
		var row = document.createElement("div");
		row.setAttribute("class", "row");
		for (j = 1; j <= 9; j++) {
			prod = i * j;
			var cell = document.createElement("span");
			cell.setAttribute("class", "cell cell-odd");
			cell.innerHTML = prod;
			row.appendChild(cell);

			if (prod % 2 == 0) {
				cell.setAttribute("class", "cell cell-even");
			}


		} // end of j
		main.appendChild(row);
	} // end of i
}