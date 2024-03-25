#! /usr/bin/env node

import inquirer from "inquirer";

const marks = await inquirer.prompt([
  {
    name: "userinput",
    type: "number",
    message: "Please enter your marks: "
  }
]);

if(marks.userinput >= 90 && marks.userinput < 100){
  console.log("Marvellous! You Got A+ Grade");
}
else if(marks.userinput >= 80 && marks.userinput < 90){
  console.log("Excellent! You Got A Grade");
}
else if(marks.userinput >=70 && marks.userinput < 80){
  console.log("Very Good! You Got B+ Grade");
}
else if(marks.userinput >=60 && marks.userinput < 70){
  console.log("Good! You Got B Grade");
}
else if(marks.userinput >= 50 && marks.userinput < 60){
  console.log("Fair! You Got C Grade");
}
else if(marks.userinput < 50){
  console.log("Sorry! You are Fail");
}
else{
  console.log("Invalid number!");
  console.log("(Please Try Again)")
}