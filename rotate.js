
document.addEventListener('DOMContentLoaded', function() {

	// Elements
	var degreeRange = document.getElementById('degree-range');
	var degreeNumber = document.getElementById('degree-number');

	// Helper Functions
	function rotateElement(degree) {
		chrome.tabs.executeScript(null, {
			code: 'var degree = '+degree+';'
		}, function() {
			chrome.tabs.executeScript(null, {file: "transform_style.js"});
		});
	}

	// Listeners
	degreeRange.addEventListener('input', function() {
		var degree = parseInt(this.value);
		
		// adjust degree number
		degreeNumber.value = degree;

		// rotate
		rotateElement(degree);
	});

});