var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -200) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'notHidden'
        );
      }
      if (positionFromTop - windowHeight <= -500 || positionFromTop - windowHeight > -200 ) {
        elems[i].className = elems[i].className.replace(
          'notHidden',
          'hidden'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();