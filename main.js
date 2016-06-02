/**
 * Open Weather API call
*/

(function() {
	var API_KEY = "d75da5829ee2244d5a25bbb10c1a7318";
	var CITY_ID = "707471"; // Ivano-Frankivsk
	var URL = "http://api.openweathermap.org/data/2.5/forecast/city?id=" + CITY_ID + "&appid=" + API_KEY;

	// XHR creation
	var XHR = new XMLHttpRequest();
	XHR.open("GET", URL, true);
	XHR.send();
	XHR.onreadystatechange = function() {
		if ((XHR.readyState == 4) && (XHR.status == 200))
		{
			console.log(XHR.responseText);
		}
	}

}());