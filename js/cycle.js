(function(){
	
	window.onload = init;
	const DURATION = 2000;
	var imageCounter;
	var img; 
	
	function init() {
		imageCounter = 1;
		img = document.getElementById('screen');
		setInterval(changeImage, DURATION);
	}
	
	function changeImage() {
		img.src = 'img/' + imageCounter + '.png';
		if (++imageCounter > 4) {
			imageCounter = 0;
		}
	}
	
})();