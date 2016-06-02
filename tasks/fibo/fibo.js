// fibo.js

/**
 * @name fiboSequnece - generator of Fibonacci Sequence
 */
function fiboSequence(numberOfElements) {
	var fibo = [1, 1];
	if (numberOfElements < 2) {
		return fibo;
	}
	else {
		for (var i = 2;i < numberOfElements;i++) {
			fibo[i] = fibo[i - 1] + fibo[i - 2];
		}
		return fibo;
	}
}

function displayFiboSeq(task, numberOfElements) {
	var fibo, fibodis = [];
	switch(task) {
		case 1: {
			fibo = fiboSequence(numberOfElements);
			// displaying
			for (var i = 0; i < numberOfElements;i++) {
				if(parseInt(fibo[i].toString().charAt(0)) % 2 == 0) {
					fibodis.push(fibo[i]);
				}
			}
			break;
		} // case 1:
	}
	return fibodis;
}

// view DOM generator for Fibonacci Sequence
function genView(task, numberOfElements, container_id) {
	var elem;	
	var fiboReducedSeq = displayFiboSeq(task, numberOfElements);
	var container = document.getElementById(container_id);

	for (var i = 0; i < fiboReducedSeq.length;i++) {
		elem = document.createElement("span");
		elem.setAttribute("class", "cell");
		elem.innerHTML = fiboReducedSeq[i];
		container.appendChild(elem);
	}

}