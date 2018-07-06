$(document).ready(function () {
	var chance = Math.floor(Math.random() * 100);
	if (chance == 69) {
		cantinafy();
	}
});

var generateHTML = function () {
	var html = `<audio controls autoplay style="display: none">
	<source src="https://raw.githubusercontent.com/stebaker92/Cantinafy/master/cantinafy.mp3" type="audio/mpeg">
  </audio>`
	return html;
};

var cantinafy = function () {
	setTimeout(function () { // Wait 3 seconds
		var html = generateHTML();
		$('body').append(html);
	}, 3000);
};
