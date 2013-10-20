var clientEventFeedURL = 'http://fresto1.owlab.com:9999/feedUIEvent';

function interceptClick(e) {
		var href = this.href;
		var target = this.target;

		var callUuid = randomUUID();
		var request_timestamp = new Date().getTime();
		var request_event = {
			stage: 'HTTP_REQUEST',
			clientId: clientIP,
			targetUrl: href,
			referrer: window.location.href,
			method: 'GET',
			timestamp: request_timestamp,
			uuid: callUuid
		}


		$.post(clientEventFeedURL, request_event); 

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
					targetUrl: href,
					clientId: clientIP,
					httpStatus: 200,
					elapsedTime: (response_timestamp - request_timestamp),
					timestamp: response_timestamp,
					uuid: callUuid
				}
				$.post(clientEventFeedURL, response_event); 
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
