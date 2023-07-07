var speed = 200;
var speedLimit = 70;
var points = 5;

    if (speed < 70) {
        console.log("ok");
    }

    var points = Math.floor((speed - speedLimit) / 5)

    if (points > 12) {
        console.log("License suspended");

    }
    else {
        console.log(points);
    }
    