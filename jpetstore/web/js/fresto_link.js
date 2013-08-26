$(document).ready(function() {
	$('a').on("click", function(e) {
		var href = this.href;
		var target = this.target;
		//alert(href + ',' + target + ',' + timestamp + ',' + clientIP);

		var callUuid = randomUUID();
		var preCall = {
			stage: 'preCall',
			clientId: clientIP,
			uuid: callUuid,
			targetUrl: href,
			timestamp: new Date().getTime()
		}

		var preCallJson = JSON.stringify(preCall);

		//// This works but the data is not in body
		//$.post('http://fresto1.owlab.com:9999/feedUIEvent', {comment: 'Say Hello!'}, function(data, status){}, 'json');

		//// This works but the data is not in body
		$.post('http://fresto1.owlab.com:9999/feedUIEvent',preCall); 

		// This does not work
		//$.ajax({
		//		type: 'POST',
		//		url: 'http://fresto1.owlab.com:9999/feedUIEvent',
		//		processData: false,
		//		contentType: 'application/json; charset=utf-8',
		//		data: preCallJson,
		//		beforeSend: function( xhr ) {
		//			xhr.overrideMimeType( 'application/json; character=utf-8');
		//		},
		//		success: function(response) {}
		//});
		
		//// This also not work!
		//var xmlhttp = new XMLHttpRequest();
		//xmlhttp.open("POST", "http://fresto1.owlab.com:9999/feedUIEvent", true);
		//xmlhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
		//xmlhttp.send(preCallJson);



		//// This works
		//$.get(href, function(data) {
		//	alert(data);
		//});

		// This also works
		$.ajax({
			type: 'GET',
			url: href, 
			success: function(data) { 
				var afterCall = {
					stage: 'afterCall',
					uuid: callUuid,
					timestamp: new Date().getTime()
				}
				$.post('http://fresto1.owlab.com:9999/feedUIEvent',afterCall); 
				//alert(data);
				$('body').html(data); 
				
			}
		});

		// To disable the default action.
		e.preventDefault();

	});
	//$('img').on("click", function() {
	//	alert('IMG');
	//	return;
	//});
});
