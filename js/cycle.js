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
		img.src = 'img/img' + imageCounter + '.PNG';
		if (++imageCounter > 5) {
			imageCounter = 0;
		}
	}
	
})();