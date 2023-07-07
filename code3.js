
// Set cart value (in our case, $49.99)
let Salary = 300000;
// Set tax rate (in our case, 7%)
if(Salary<=24000){
paye = Salary * 10/100
}
else if (Salary<=32333 && Salary >=240001){
    paye = Salary * 25/ 100
}
else if(Salary>32333){

    paye = Salary * 30/100
}

console.log(paye);

