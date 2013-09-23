function interceptClick(e) {
		var href = this.href;
		var target = this.target;

		var callUuid = randomUUID();
		var request_timestamp = new Date().getTime();
		var request_event = {
			stage: 'HTTP_REQUEST',
			uuid: callUuid,
			clientId: clientIP,
			currentPlace: window.location.href,
			targetUrl: href,
			method: 'GET',
			requestTimestamp: request_timestamp
		}


		$.post('http://fresto1.owlab.com:9999/feedUIEvent',request_event); 

		$.ajax({
			type: 'GET',
			beforeSend: function(request) {
			    request.setRequestHeader('fresto-uuid', callUuid);
			},
			url: href, 
			success: function(data) { 
				var response_timestamp = new Date().getTime();
				var response_event = {
					stage: 'HTTP_RESPONSE',
					uuid: callUuid,
					clientId: clientIP,
					currentPlace: window.location.href,
					targetUrl: href,
					method: 'GET',
					requestTimestamp: request_timestamp,
					responseTimestamp: response_timestamp,
					elapsedTime: (response_timestamp - reqeust_timestamp),
					httpStatus: 200
				}
				$.post('http://fresto1.owlab.com:9999/feedUIEvent', response_event); 
				window.history.pushState('Programmed State','JPetStore', href);
				$('body').html(data); 
				//document.write(data);
				
			}
		});

		// To disable the default action.
		e.preventDefault();

}

$(document).ready(function() {
	$('a').on("click", interceptClick);
	$('area').on("click", interceptClick);
});
