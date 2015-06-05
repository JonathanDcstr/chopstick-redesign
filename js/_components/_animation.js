chopstick.animation =
{
    init: function()
    {
        chopstick.animation.flyAnimation();
        chopstick.animation.footerAnimation();
    },

    flyAnimation: function() {
        // construct timelines
        var tl = new TimelineMax({yoyo: true, repeat: -1}),
            tl2 = new TimelineMax({yoyo: true, repeat: -1});

        var screenWidth = $( document ).innerWidth();

        // set fly position in 100 different spots
        for (var i = 0; i < 100; i++) {

            var randomX = Math.floor((Math.random() * screenWidth/8) + 1),
                randomY = Math.floor((Math.random() * 200) + 1),
                randomTiming = Math.floor((Math.random() * 1) + 1);

            tl.to(".js-animatedfly", randomTiming, {
                scale: 1,
                x: randomX + "px",
                y: randomY + "px",
                ease: Expo.easeInOut
            });

            tl2.to(".js-right-wing", 0.2, {
                scale: 1,
                rotation: "30_cw",
                ease: Expo.easeIn,
                transformOrigin:"left 80%"
            },"flap1");

            tl2.to(".js-left-wing", 0.2, {
                scale: 1,
                rotation: "330_ccw",
                ease: Expo.easeIn,
                transformOrigin: "right 80%"
            },"flap1");
        };
    },

    footerAnimation: function() {
        var controller = new ScrollMagic.Controller();

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: ".js-footer-animation-trigger"})
                    // trigger animation by adding a css class
                    .setClassToggle(".c-holder--footer", "js-animation-footer")
                    //.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
                    .addTo(controller);
    }
};
