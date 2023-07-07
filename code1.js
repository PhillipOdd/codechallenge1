//start of the first question
// create function to read students marks and return corresponding letter grade
function letterGrade(marks){
{
    //parameters for certain grades
    if (marks <= 100 && marks >= 80) {
        console.log("Grade : A");
    }
    else if (marks <= 79 && marks >= 60) {
        console.log("Grade : B");
    }
    else if (marks <= 59 && marks >= 49) {
        console.log("Grade : C");
    }
    else if (marks <= 48 && marks >= 40) {
        console.log("Grade : D");
    }
    else {
        console.log("Grade : E");
    }


}
}
//testing code with different values
letterGrade(90);
letterGrade(57);
letterGrade(30);
//end of first question



