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
		if (imageCounter === 0) {
			img.src = 'img/home.png';
			imageCounter++;
		} else if (imageCounter === 1) {
			img.src = 'img/home2.png';
			imageCounter++;
		} else if (imageCounter === 2) {
			img.src = 'img/original.png';
			imageCounter = 0;
		}
	}
	
})();