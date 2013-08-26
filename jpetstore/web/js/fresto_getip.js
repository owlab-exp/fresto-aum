
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
			//alert(json.host);
			clientIP = json.host;
		}
