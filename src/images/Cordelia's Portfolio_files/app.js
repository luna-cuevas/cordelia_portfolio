$('.product-card-media').mouseover(function() {
	var player = $('#' + this.id);
	froogaloop = $f(player[0].id);
	froogaloop.api('play');
	player.mouseout(function() {
		froogaloop.api('pause');
	});
});
