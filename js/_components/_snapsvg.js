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
