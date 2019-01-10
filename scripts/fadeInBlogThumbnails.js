$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// if (wScroll > $('.blogThumbnail').offset().top) {
	// 	console.log("hi");

	if (wScroll > $('.blogShowcaseContainer').offset().top - ($(window).height() / 1.7)) {
		$('.blogShowcaseContainer .blogThumbnail .blogName').each(function(i) {
			setTimeout(function(){
				$('.blogThumbnail .blogName').eq(i).removeClass("hidden");
			}, 150 * (i + 1));
		});
	} else {
		// var elem = $('.blogName');
		// if(!elem.hasClass('hidden')){
		//   elem.addClass('hidden');
		// }
		$('.blogShowcaseContainer .blogThumbnail .blogName').each(function(i) {
				$('.blogThumbnail .blogName').eq(i).addClass("hidden");
		});
	}
});