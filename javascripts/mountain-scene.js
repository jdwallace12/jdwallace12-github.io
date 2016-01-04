$(document).ready(function() {
    var skipath = {
        entry: {
            curviness: .25,
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
                x: 200,
                y: 100
            }, {
                x: 800,
                y: 300
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
        duration: 400,
        offset: 300
    })

    .setPin("#target")
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);



    // build scene
    var scene = new ScrollMagic.Scene({
            triggerElement: "#trees",
               offset: -200
        })
        .setTween("#trees", 2, {
            scale: 1.4,
            opacity: 1
        }) // trigger a TweenMax.to tween
       
        .addTo(controller);
});