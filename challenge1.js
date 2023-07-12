//Asks the user to input a value
let marks = prompt("enter marks");
let grade;

//Loop to determine letter grade based on value 
if(marks>= 80 && marks <= 100){
    grade = "A";
} else if (marks>= 60 && marks <=79) {
    grade = "B";
} else if (marks>= 50 && marks <= 59) {
    grade = "C";
} else if (marks >= 40 && marks <= 49){
    grade = "D";
}
else if (marks < 40 && marks >=0){
    grade = "E";
}else{
    console.log("Invalid input");
}

//showing the user their grade 
if (grade){
    let gradeElement = document.getElementById("grade");
    gradeElement.textContent = 'The grade is = ${grade}.';
}


