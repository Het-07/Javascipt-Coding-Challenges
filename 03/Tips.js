// JAVASCRIPT CODING CHALLENGE  - 03

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).  
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between 50-200 dollars, and 10% if more than 200 dollars.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)
*/

var beforeTips = [124, 48, 268]; 
var tips = []; 
var amount = []; 

function calculateTips(bill)
{
  var percent;
  if ( bill <= 50) {
      percent = 0.2;  
    }
  else if (50 < bill <= 200) {
          percent = 0.15;
    }
  else {
          percent = 0.1;
    }
    return percent * bill;
  }

for (i = 0; i< beforeTips.length; i++)
{
    tips[i] = calculateTips(beforeTips[i]);
    amount[i] = beforeTips[i] + amount[i];
    console.log([i] + '. total tips: ' + amount[i]);
}

console.log('Bills before tips: ' + beforeTips.toString());
console.log('Amounts: ' + amount.toString());