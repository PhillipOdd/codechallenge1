//Declaring the function
function speedDectector(speed) {
    //Declare the variables
    var speedLimit = 70;
    var points = 5;
    //computing no. of points
    var points = Math.floor((speed - speedLimit) / 5)
    if (speed < speedLimit) {
        console.log("ok");
    }
    else if (points <= 12) {
        console.log(points + "points");
    }
    //if not under or equal 12
    else {
        console.log("your license is suspended");
    }


}
//under the speed limit
speedDectector(65);
//just over the speed limit
speedDectector(100);
//getting over 12 points
speedDectector(300);

