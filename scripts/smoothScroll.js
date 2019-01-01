function scrollToAnchor(anchor) {
	// cgi_escape causes problems with multiple word tags which are combined with '+' symbols
	anchor = anchor.replace('+', '\\+');
    var scrollTo = $('#' + anchor);
    $('html,body').animate({scrollTop: scrollTo.offset().top},'slow');
}

function scrollToTop(){
    $('html,body').animate({scrollTop: 0},'slow');
}

// function scrollToTest(){
//     $('html,body').animate({scrollTop: $('#black\\+magic').offset().top},'slow');
// }
