(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,
// TODO: complete this method
// hint: area = pi * radius^2
        getArea: function () {
            return (Math.PI *(Math.pow(this.radius, 2)));
            // TODO: return the proper value
        },
// TODO: complete this method.
// If doRounding is true, round the result to the nearest integer.
        // Otherwise, output the complete value
        logInfo: function (doRounding) {
            if(doRounding === true) {
                const area = this.getArea();
                console.log(Math.round(area));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: ");
                console.log(this.getArea());
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
