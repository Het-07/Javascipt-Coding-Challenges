// JAVASCRIPT CODING CHALLENGE - 01

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height).(mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 
*/

var Mass1; //mass of Mark
var Height1; //height of Mark

var Mass2; //mass of John
var Height2; //height of John

var BMI1; //BMI of Mark 
var BMI2; //BMI of John

Mass1 = prompt('What is mass of Mark? \n');
Height1 = prompt('What is height of Mark? \n');

Mass2 = prompt('What is mass of John? \n');
Height2 = prompt('What is height of John? \n');

BMI1 = Mass1 / (Height1 * Height1);
BMI2 = Mass2 / (Height2 * Height2);

var  calculateBMI  = BMI1 > BMI2;
console.log(BMI1, BMI2);

if(BMI1 > BMI2){
  console.log('BMI of Mark is greater than BMI of John \n');
}
else {
  console.log('BMI of John is greater than BMI of Mark \n');
}
