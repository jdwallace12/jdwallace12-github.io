$(document).ready(function() {
    var skipath = {
        entry: {
            curviness: 2.25,
            autoRotate: true,
            values: [{
                x: 90,
                y: 0
            }]
        },
        leave: {
            curviness: 2.55,
            autoRotate: true,
            values: [{
                x: 300,
                y: 100
            }, {
                x: 400,
                y: 100
            }]
        }
    };
    // init controller
    var controller = new ScrollMagic.Controller();

    // create tween
    var tween = new TimelineMax()
        .add(TweenMax.to($("#skier"), 1.2, {
            css: {
                bezier: skipath.entry
            },
            ease: Power1.easeInOut
        }))
        .add(TweenMax.to($("#skier"), 1, {
            css: {
                bezier: skipath.leave
            },
            ease: Power1.easeInOut
        }));

    // build scene
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: 300,
        offset: 0
    })

    .setPin("#target")
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    var animateElem = document.getElementById("snow");
    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#mountain-bg",
            offset: 400
        })
        .on("enter", function() {
            // trigger animation by changing inline style.
            animateElem.style.display = "block";
        })
         .on("leave", function() {
            // trigger animation by changing inline style.
            animateElem.style.display = "none";
        })
  
        // add indicators (requires plugin)
        .addTo(controller);

});