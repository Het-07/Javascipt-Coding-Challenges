// JAVASCRIPT CODING CHALLENGE - 04

/*
Remember Mark and John BMI Challenge. 
Implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and Height
2. Then, add a method to each object to calculate the BMI. 
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, 
together with the full name and the respective BMI.
Don't forget they might have the same BMI.

Remember: BMI = mass / heightˆ2 = mass / (height * height).
(mass in kg and height in meter).
*/

let Mark = { fullName: 'Mark Cage', mass: '78', height: '1.75',
calBMI:function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
    }
}   

let John = { fullName: 'John Smith', mass: '82', height: '1.65',
calBMI:function(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
}

    console.log("Mark: " + Mark.calBMI());
    console.log("John: " + John.calBMI());
    
    if(Mark.bmi > John.bmi){
     console.log(Mark.fullName + " has higher BMI value " + Mark.bmi);
    }
    else if(John.bmi > Mark.bmi){
     console.log(John.fullName + " has higher BMI value " + John.bmi);
    } 
    else {
     console.log(John.fullName + " and " + Mark.fullName + "  have same BMI value." )
    }
