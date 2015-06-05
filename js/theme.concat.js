var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        // chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
        // chopstick.loadObject(chopstick.hide, 'chopstick.hide');
        // chopstick.loadObject(chopstick.toggle, 'chopstick.toggle');
        // chopstick.loadObject(chopstick.snapsvg, 'chopstick.snapsvg');
        // chopstick.loadObject(chopstick.fittext, 'chopstick.fittext');
        chopstick.loadObject(chopstick.animation, 'chopstick.animation');

        console.log("javascript is locked and loaded!"); // for testing purposes. Check your console. Delete after you finished reading this. :-)
    },

    /**
     * This function will load an object by a given name
     *
     * If the object doesn't exist no error will be thrown
     * But if object exists but doesn't have an init method it will throw an error
     *
     * If everything is ok we'll initiate the given object
     */
    loadObject: function(obj, name)
    {
        // create object based on a name
        // var objName = window[objName];

        // check if object exists
        if(typeof obj != 'undefined') {

            // check if object has a method init
            if (typeof obj.init == 'undefined') {
                // we will throw an error so the designer / developer know there's a problem
                throw new Error('ERROR: "' + name + '" does not have an init function');

            } else {
                // everything is fine so initiate
                obj.init();
            }
        }
    }
 };

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

chopstick.fittext =
{
    init: function() {
            //console.log('fittext loaded');
            // jQuery(".c-responsive-headline").fitText(1, { minFontSize: '41px', maxFontSize: '91px' });
        }
};

chopstick.hide =
{
    settings:
    {
        hide: $('.js-hide')
    },

    init: function()
    {
        settings = this.settings;
        chopstick.hide.hideContent();
    },

    hideContent: function ()
    {
        settings.hide.on('click', function(e)
        {
            e.preventDefault();
            $(this).closest(settings.hide).parent().addClass('is-hidden');
        });
    }
};

chopstick.mobileNav =
{
    settings:
    {
        navHolder: $('.js-nav-holder'),
        trigger: $('.js-nav-trigger'),
    },

    init: function()
    {
        settings = this.settings;

        chopstick.mobileNav.enableMobileNav();
        chopstick.mobileNav.buildMobileNav();
    },

    enableMobileNav: function()
    {
        $("html").addClass("c-mobile-nav");
    },

    // build mobile nav
    buildMobileNav: function()
    {
        settings.trigger.on('click', function() {
            $('.js-nav').toggle();
            $(this).toggleClass("is-active");
        });
    }
};

chopstick.snapsvg =
{
    init: function()
    {
        window.onload = function () {
        console.log('test');

        var flyicon = Snap.select("#headerfly"),
            background = flyicon.select("#background"),
            wingLeft = flyicon.select("#wing--left"),
            wingRight = flyicon.select("#wing--right"),
            upperstick = flyicon.select("#upperstick"),
            lowerstick = flyicon.select("#lowerstick"),
            timer; // om animatie mogelijk te maken



        function onHoverIn() {
            clearTimeout(timer);

            upperstick.animate({
                transform: "t0,0r20"
                // transform: "t-20,20r5"
            }, 100, mina.easein);

            lowerstick.animate({
                transform: "t0,0r-20"
                // transform: "t-20,20r5"
            }, 100, mina.easein);

            // wingLeft.animate({
            //     transform: "t0,0r-20"
            //     // transform: "t-20,20r5"
            // }, 100, mina.easein);

            // wingRight.animate({
            //     transform: "t0,0r20"
            //     // transform: "t-20,20r5"
            // }, 100, mina.easein);

        }



        function onHoverOut() {
            clearTimeout(timer);

            upperstick.animate({
                transform: "t0,0r0"
            }, 1000, mina.elastic);

            lowerstick.animate({
                transform: "t0,0r0"
                // transform: "t-20,20r5"
            }, 1000, mina.elastic);

            wingLeft.animate({
                transform: "t0,0r0"
                // transform: "t-20,20r5"
            }, 100, mina.easein);


            wingRight.animate({
                transform: "t0,0r0"
                // transform: "t-20,20r5"
            }, 100, mina.easein);
        }

        timer = setTimeout(onHoverOut, 500);

        flyicon.hover(onHoverIn,
            function () {
                timer = setTimeout(onHoverOut, 100);
                }
        );

        }
    }
};

chopstick.toggle =
{
    init: function() {
        // The toggle is called with the '.js-toggle' class and one or more data-targets
        // Use the 'is-hidden' class to hide your elements"
        var toggle = $('.js-toggle');

        // Toggle functionality
        toggle.on('touchstart click', function(e){
            // Prevent the default action on links
            e.preventDefault();

            // Split the targets if multiple
            var targets = $(this).data("target").replace(" ", "").split(",");

            // Loop trough targets and toggle the 'is-hidden' class
            for (var i = targets.length - 1; i >= 0; i--) {
                if(targets[i]){
                    // Toggle the 'is-hidden' class
                    $(targets[i]).toggleClass('is-hidden');
                }
            }

            // Add an 'is-toggled' class to the trigger.
            // Use this class to style your icons, active states, etc.
            $(this).toggleClass('is-toggled');

            return false;
        });
    }
};

$(chopstick.init);
