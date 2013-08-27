
/* gitip.js - Version 0.5
 *
 * HnJae Lee
 *
 */

/**
 * This is a part of codes to know client IP address
 */

		var clientIP = "no IP Address";
		function getip(json){
		//function getip(){
			//alert(json.host);
			//var xmlhttp = new XMLHttpRequest();
			//xmlhttp.open("GET", "http://fresto1.owlab.com:9999/whatIsMyIPAddress", false);
			//xmlhttp.send();
			clientIP = json.ip;
			//clientIP = xmlhttp.responseText;
			//alert(clientIP);
		}
