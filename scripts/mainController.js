/**
* Main controller
*
*/

function loadTemplate(selector, url) {
		console.log('loadTemplate');
        // init navbar and display it
        $(selector).load(url);
	
}