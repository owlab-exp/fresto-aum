function interceptClick(e) {
		var href = this.href;
		var target = this.target;

		var callUuid = randomUUID();
		var beforeTimeStamp = new Date().getTime();
		var preCall = {
			stage: 'beforeCall',
			clientId: clientIP,
			currentPlace: window.location.href,
			uuid: callUuid,
			targetUrl: href,
			timestamp: beforeTimeStamp
		}

		//var preCallJson = JSON.stringify(preCall);

		$.post('http://fresto1.owlab.com:9999/feedUIEvent',preCall); 

		$.ajax({
			type: 'GET',
			url: href, 
			success: function(data) { 
				var afterTimeStamp = new Date().getTime();
				var afterCall = {
					stage: 'afterCall',
					clientId: clientIP,
					currentPlace: window.location.href,
					uuid: callUuid,
					targetUrl: href,
					timestamp: afterTimeStamp,
					elapsedTime: (afterTimeStamp - beforeTimeStamp),
					httpStatus: 'success'
				}
				$.post('http://fresto1.owlab.com:9999/feedUIEvent',afterCall); 
				$('body').html(data); 
				
			}
		});

		// To disable the default action.
		e.preventDefault();

}

$(document).ready(function() {
	$('a').on("click", interceptClick);
	$('area').on("click", interceptClick);
});
