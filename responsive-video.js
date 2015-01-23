(function() {

	function init() {
		bindEvents();
	}

	function bindEvents() {
		$('.generate-code').on('click', function() {
			var id = $('.input-video-id').val().trim();
			if(id.length > 0) {
				generateCode(id);	
			}
		});
	}

	function generateCode(id) {
		var html = '';

		var css = '.outer-video-container {width: 100%;max-width: 960px;margin: 2em auto;}.inner-video-container {position: relative;height: 0;overflow: hidden;padding-bottom: 56.25%;}.inner-video-container .BrightcoveExperience {position: absolute;top: 0;left: 0;width: 100%;height: 100%;}';

		html += '<style>' + css + '</style>';

		html += '<div class="outer-video-container">';
		html += '<div class="inner-video-container">';
		html += '<object id="myExperience' + id + '" class="BrightcoveExperience">';
		html += '<param name="bgcolor" value="#FFFFFF" />';
		html += '<param name="width" value="640" />';
		html += '<param name="height" value="480" />';
		html += '<param name="playerID" value="876399703001" />';
		html += '<param name="playerKey" value="AQ~~,AAAAAA6piHY~,DqRT40XOAr8ZcUAbMBHT4FlxXBkSQ2C2" />';
		html += '<param name="isVid" value="true" />';
		html += '<param name="isUI" value="true" />';
		html += '<param name="dynamicStreaming" value="true" />';
		html += '<param name="@videoPlayer" value="' + id + '" />';
		html += '</object>';
		html += '</div>';
		html += '</div>';
		html += '<script language="JavaScript" type="text/javascript" src="http://admin.brightcove.com/js/BrightcoveExperiences.js"></script>';

		$('.output-code').val(html);
	}


	init();
})();