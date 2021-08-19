


function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
  });
}

onmousemove(function (e) {
    console.log('testing');
    parallaxIt(e, ".slide", -100);
    parallaxIt(e, "img", -30);
  });
  
  console.log('testing');