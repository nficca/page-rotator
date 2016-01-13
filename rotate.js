
document.addEventListener('DOMContentLoaded', function() {

	var slider = document.getElementById('degree-range');

	slider.addEventListener('input', function() {
		var degree = parseInt(this.value);
		chrome.tabs.executeScript(null, {
			code: 'var degree = '+degree+';'
		}, function() {
			chrome.tabs.executeScript(null, {file: "transform_style.js"});
		});
	});

});