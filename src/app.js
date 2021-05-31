$('.product-card-media').mouseover(function() {
	var player = $('#' + this.id);
	froogaloop = $f(player[0].id);
	froogaloop.api('play');
	player.mouseout(function() {
		froogaloop.api('pause');
	});
});

function myFunction() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}
