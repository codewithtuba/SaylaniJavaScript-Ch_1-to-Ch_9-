
// Q.1)  
var age = 22;
alert("I am " + age + " years old");

/////////////////////////////////////////////////////

// Q.2) 
// let num = 1;
// for(let i = 0; i < num; i++) {
//     alert("You have visited this site "+ num + " times ");
//     num++;
// }

/////////////////////////////////////////////////////

// Q.3) 
let birthYear = 2000;
document.write("My birth year is " + birthYear + " \n " + "<br>Data type of my declared variable is number");
document.write("<br>");

/////////////////////////////////////////////////////

// Q.4)
var visitorName;
var productTitle;
var quality;

visitorName = prompt("Enter your name");
productTitle = prompt("Enter your Product Title");
quality = prompt("How many products a visitor wants to order");

document.write("<b>" + visitorName + "</b>" + " ordered " + "<b>" + quality  + " </b>" + "<b>" +productTitle + "</b>"+ "(s) on XYZ Clothing store");

