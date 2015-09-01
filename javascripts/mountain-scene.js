$(document).ready(function() {
    var skipath = {
      entry : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100,  y: 0}
          ]
      },
      leave : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: $(window).width() + 300,  y: 100}
          ]
      }
    };
    // init controller
    var controller = new ScrollMagic.Controller();

    // create tween
    var tween = new TimelineMax()
      .add(TweenMax.to($("#skier"), 1.2, {css:{bezier:skipath.entry}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("#skier"), 1, {css:{bezier:skipath.leave}, ease:Power1.easeInOut}));

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 1000, offset: 0})
            .setPin("#target")
            .setTween(tween)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
  });
