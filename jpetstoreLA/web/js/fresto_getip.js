
/* gitip.js - Version 0.5
 *
 * HnJae Lee
 *
 */

/**
 * This is a part of codes to know client IP address
 */

		var clientIP = "Not set";

		function getip(json){
			clientIP = json.ip;
			//alert(clientIP);
		}
			
			//var xmlhttp = new XMLHttpRequest();
			//xmlhttp.onreadystatechange = function() {
			//	if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//	//if(xmlhttp.readyState == 4) {
			//		clientIP = xmlhttp.responseText;
			//		alert(clientIP);
			//	}
			//};
			//xmlhttp.open("GET", "http://fresto1.owlab.com:9999/whatIsMyIPAddress?q=getip", false);
			//xmlhttp.send();
			//clientIP = json.ip;

