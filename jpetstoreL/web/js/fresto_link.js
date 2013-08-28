function interceptClick(e) {
		var href = this.href;
		var target = this.target;

		var callUuid = randomUUID();
		var preCall = {
			stage: 'beforeCall',
			clientId: clientIP,
			currentPage: window.location.href,
			uuid: callUuid,
			targetUrl: href,
			timestamp: new Date().getTime()
		}

		var preCallJson = JSON.stringify(preCall);

		$.post('http://fresto1.owlab.com:9999/feedUIEvent',preCall); 

		$.ajax({
			type: 'GET',
			url: href, 
			success: function(data) { 
				var afterCall = {
					stage: 'afterCall',
					clientId: clientIP,
					uuid: callUuid,
					targetUrl: href,
					timestamp: new Date().getTime()
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
