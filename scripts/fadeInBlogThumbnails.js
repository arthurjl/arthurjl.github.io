$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// if (wScroll > $('.blogThumbnail').offset().top) {
	// 	console.log("hi");

	if (wScroll > $('.blogShowcaseContainer').offset().top - ($(window).height() / 1.7)) {
		console.log("hi");

		$('.blogShowcaseContainer .blogThumbnail .blogName').each(function(i) {
			console.log(i);
			setTimeout(function(){
				$('.blogThumbnail .blogName').eq(i).removeClass("hidden");
			}, 150 * (i + 1));
		});
	} else {
		var elem = $('.blogName');
		if(!elem.hasClass('hidden')){
		  elem.addClass('hidden');
		}
	}
});