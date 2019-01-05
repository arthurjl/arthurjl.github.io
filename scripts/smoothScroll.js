function scrollToAnchor(anchor) {
	// cgi_escape causes problems with multiple word tags which are combined with '+' symbols
	// the following line resolves this by escaping + symbols
	anchor = anchor.replace('+', '\\+');
    var scrollTo = $('#' + anchor);
    $('html,body').animate({scrollTop: scrollTo.offset().top},'slow');
}

function scrollToTop(){
    $('html,body').animate({scrollTop: 0},'slow');
}