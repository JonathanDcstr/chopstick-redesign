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
