
document.addEventListener('DOMContentLoaded', function() {

	// Elements
	var degreeRange = document.getElementById('degree-range');
	var degreeNumber = document.getElementById('degree-number');
	var resetButton = document.getElementById('reset-button');

	// Helper Functions
	function rotateElement(degree) {
		chrome.tabs.executeScript(null, {
			code: 'var degree = '+degree+';'
		}, function() {
			chrome.tabs.executeScript(null, {file: "transform_style.js"});
		});
	}

	function verifyRange(degree) {
		return degree && !isNaN(degree) && -180 <= degree && degree <= 180;
	}

	function addMultipleListeners(elements, actions, handler) {
		var _actions = actions.split(' ');
		var i = 0,j = 0;
		for (; i < _actions.length; ++i) {
			if (Object.prototype.toString.call(elements) !== '[object Array]') {
				elements.addEventListener(_actions[i], handler);
			} else {
				for (; j < elements.length; ++j) {
					elements.addEventListener(_actions[i], handler)
				}
			}
		}
	}

	// Listeners
	degreeRange.addEventListener('input', function() {
		var degree = parseInt(this.value);
		
		// adjust degree number
		if (verifyRange(degree)) {
			degreeNumber.value = degree;
		}

		// rotate
		rotateElement(degree);
	});

	addMultipleListeners(degreeNumber, 'keyup keypress keydown change', function() {
		var degree = parseInt(this.value);

		// adjust degree number
		if (verifyRange(degree)) {
			degreeRange.value = degree;
		}

		// rotate
		rotateElement(degree);
	});

	resetButton.addEventListener('click', function() {
		degreeRange.value = 0;
		degreeNumber.value = 0;
		rotateElement(0);
	})

});