// JAVASCRIPT CODING CHALLENGE - 02

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89,
    120 and 103 points, while Mike's team scored 116, 94, and 123 points.
1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average score), and print the winner to the console.
    Also include the average score in the output.
3. Then change the scores to show different winners.
    Don't forget to take into acount there might be a draw (the same average score).

4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points.  Like before, log the
    average winner to the console.  HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

var JohnAvg =  (89 + 120 + 103) / 3;
var MikeAvg =  (116 + 94 + 123) / 3;

console.log("Avg of John: " + JohnAvg + "\n" + "Avg of Mike: " + MikeAvg);

if (JohnAvg > MikeAvg) {
    console.log("John is winning: " + JohnAvg);
}
else {
    console.log("Mike is winning: " + MikeAvg);
}

// let's check for other option
var JohnAvg2 = (88 + 91 + 136)/3;
var MikeAvg2 = (115 + 90 + 98)/3;

console.log("Avg of John: " + JohnAvg2 + "\n" + "Avg of Mike: " + MikeAvg2);

if (JohnAvg2 > MikeAvg2) {
    console.log("John is winning: " + JohnAvg2);
}
else {
    console.log("Mike is winning: " + MikeAvg2);
}

// let's introduce third member
var MaryAvg =  (97 + 134 + 105) / 3;

console.log("Avg of John: " + JohnAvg + "\n"  + "Avg of Mike: " + MikeAvg + "\n" 
+ "Avg of Mary: " + MaryAvg);

if (JohnAvg > MikeAvg  && JohnAvg > MaryAvg) {   
    console.log("John is winning"); 
}
else if (MikeAvg > JohnAvg && MikeAvg > MaryAvg) { 
    console.log("Mike is winning"); 
}
else if (MaryAvg > JohnAvg &&  MaryAvg > MikeAvg) { 
    console.log("Mary is winning"); 
}
else if (JohnAvg === MikeAvg  && JohnAvg > MaryAvg) {   
    console.log("John and Mike are tied for winning"); 
}
else if (JohnAvg === MaryAvg && JohnAvg > MikeAvg ) {   
    console.log("John and Mary are tied for winning"); 
}
else if (MikeAvg === MaryAvg && MaryAvg > JohnAvg ) {   
    console.log("Mike and Mary are tied for winning"); 
}
else { 
    console.log("They all are tied for winning! Wohoo..."); 
}

// let's check for draws
var JohnAvg3 = (88 + 91 + 136)/3;
var MikeAvg3 = (91 + 136 + 88)/3;
var MaryAvg3 = (136 + 88 + 91)/3;

console.log("Avg of John: " + JohnAvg3 + "\n"  + "Avg of Mike: " + MikeAvg3 + "\n" 
+ "Avg of Mary: " + MaryAvg3);

if (JohnAvg3 > MikeAvg3  && JohnAvg3 > MaryAvg3) {   
    console.log("John is winning"); 
}
else if (MikeAvg3 > JohnAvg3 && MikeAvg3 > MaryAvg3) { 
    console.log("Mike is winning"); 
}
else if (MaryAvg3 > JohnAvg3 &&  MaryAvg3 > MikeAvg3) { 
    console.log("Mary is winning"); 
}
else if (JohnAvg3 === MikeAvg3  && JohnAvg3 > MaryAvg3) {   
    console.log("John and Mike are tied for winning"); 
}
else if (JohnAvg3 === MaryAvg3 && JohnAvg3 > MikeAvg3) {   
    console.log("John and Mary are tied for winning"); 
}
else if (MikeAvg3 === MaryAvg3 && MaryAvg3 > JohnAvg3) {   
    console.log("Mike and Mary are tied for winning"); 
}
else { 
    console.log("They all are tied for winning! Wohoo..."); 
}
