// JAVASCRIPT CODING CHALLENGE - 06

/* -------------------------------- 
DISPLAY A FIBINACCI SERIES USING BASIC JAVASCRIPT.
-------------------------------- */

var var1 = 0;
var var2 = 1; 
var var3;

console.log("Here is the Fibonacci series: ");

while (var1<50) {
console.log(var1 + " " + "\n");
var3 = var1 + var2;
var1 = var2;
var2 = var3;
}

// using recursion method
function fbs(num){
    if(num < 2) {
        return 1;
    }
    else {
        return fbs(num - 2) + fbs(num - 1);
    }
}

console.log(fbs(10));