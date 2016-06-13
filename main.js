/**
 * Open Weather API call
*/

function request(CITY_ID) {
	var URL = "http://api.openweathermap.org/data/2.5/weather?id=";
	var API_KEY = "d75da5829ee2244d5a25bbb10c1a7318";
	var REQ_URL = URL + CITY_ID + "&appid=" + API_KEY;
	var RESP;

	// XHR creation
	var XHR = new XMLHttpRequest();
	XHR.open("GET", REQ_URL, true);
	XHR.send();

	XHR.onreadystatechange = function() {
		if ((XHR.readyState == 4) && (XHR.status == 200))
		{
			RESP=JSON.parse(XHR.responseText);
            
            contentWeather.innerHTML = "";
            var elem = document.createElement("div");
            contentWeather.appendChild(elem);
            elem.innerHTML += "<h4>" + "<b>" + "Температура повітря" + "</b>" + " " + " " + "<i>" + Math.round(RESP.main.temp-273.15) + "&deg" + "C" + "</i>" + "</h4>";
		}
	}

}