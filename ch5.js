// Q.1) 
const num1 = parseInt(prompt("Enter a first number for addition"));
const num2 = parseInt(prompt("Enter a second number for addition"));
const sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

////////////////////////////////////////////////////////////////////////

// Q.2a) 
const n1 = parseInt(prompt("Enter a first number for subtraction"));
const n2 = parseInt(prompt("Enter a second number for subtraction"));
const add = n1 - n2;
document.write(" <br> Subtraction of " + n1 + " and " + n2 + " is " + add);

////////////////////////////////////////////////////////////////////////

// Q.2b) 
const no1 = parseInt(prompt("Enter a first number for multiplication"));
const no2 = parseInt(prompt("Enter a second number for multiplication"));
const total = no1 * no2;
document.write(" <br> Multiplication of " + no1 + " and " + no2 + " is " + total);

////////////////////////////////////////////////////////////////////////

// Q.2c)
const numb1 = parseInt(prompt("Enter a first number for division"));
const numb2 = parseInt(prompt("Enter a second number for division"));
const tally = numb1 / numb2;
document.write(" <br> Division of " + numb1 + " and " + numb2 + " is " + tally);

////////////////////////////////////////////////////////////////////////

// Q.2d)
const number1 = parseInt(prompt("Enter a first number for modulus"));
const number2 = parseInt(prompt("Enter a second number for modulus"));
const sumup = number1 % number2;
document.write(" <br> Modulus of " + number1 + " and " + number2 + " is " + sumup);

////////////////////////////////////////////////////////////////////////

// Q.3)
var value;
document.write("Value after variable declaration is " + value);
value = 5;
document.write("<br> Initial value: " + value);
value++;
document.write("<br> Value after increment is: " + value);
var newValue = value + 7;
document.write("<br> Value after addition is: " + newValue);
newValue--;
document.write("<br> Value after decrement is: " + newValue);
remainder = newValue % 3;
document.write("<br> The remainder is: " + remainder);

////////////////////////////////////////////////////////////////////////

// Q.4)
var ticketPrice = 600;
var noOfTicket = prompt("How many tickets are buying");
var cost = ticketPrice * noOfTicket;
document.write("<br> Total cost to buy " + noOfTicket + " tickets to a movie is " + cost + "PKR");

////////////////////////////////////////////////////////////////////////

// Q.5)
var tableNo = prompt("Enter a Table number");
document.write("<br><h1> Table of " + tableNo + "</h1>");
for(let i = 1; i <= 10; i++) {
document.write(tableNo + " x " + i + " = " + tableNo * i + "<br>");
document.write()
}

////////////////////////////////////////////////////////////////////////

// Q.6)
var cTemp = 25;
var cToFahr = cTemp * 9 / 5 + 32;
var message = cTemp + '\xB0C is ' + cToFahr + '\xB0F.';
document.write("<br>" + message);

var fTemp = 70 ;
var fToCel = (fTemp - 32) * 5 / 9;
var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
document.write("<br>" + message);

////////////////////////////////////////////////////////////////////////

// Q.7)
var item1 = prompt("Enter your price of item 1");
var quaItem1 = prompt("How many ordering items in item 1 ");
var item2 = prompt("Enter your price of item 2");
var quaItem2 = prompt("How many ordering items in item 2");
const shipChrg = 100;
var totalCost = item1 * quaItem1 + item2 * quaItem2 + shipChrg;

document.write("<br><br> Price of item 1 is " + item1);
document.write("<br> Quality of item 1 is " + quaItem1);
document.write("<br> Price of item 2 is " + item2);
document.write("<br> Quality of item 2 is " + quaItem2);
document.write("<br> Shipping Charges "+ shipChrg);
document.write("<br><br> Total cost of your order is "+ totalCost);

////////////////////////////////////////////////////////////////////////

// Q.8)
const totalMarks = prompt("Enter your Total Marks");
const obtainMarks = prompt("Enter your Obtained Marks");
const per = parseFloat((obtainMarks / totalMarks) * 100);

document.write("<br><h1>Marks Sheet </h1>")
document.write("<br>Total marks: " + totalMarks);
document.write("<br>Marks Obtained: " + obtainMarks);
document.write("<br>Percentage: " + per +"%");

////////////////////////////////////////////////////////////////////////

// Q.9)


var dollar = 279.30;
var riyal = 74.38;
document.write("<br><h1>Currency in PKR</h1><br><br>")
document.write("Total currency in PKR: ", (dollar * 10) + (riyal * 25) + "<br><br>");

////////////////////////////////////////////////////////////////////////

// Q.10)
let a = 10;
// console.log(++a);
// console.log(a * 10);
// console.log(a / 2);
document.write("<h1>Arithmetic Operations: </h1>")
document.write((a) + (++a) + (a * 10) + (a / 2));

////////////////////////////////////////////////////////////////////////

// Q.11)
var currYear = prompt("Enter your Current Year");
var bthYear = prompt("Enter your Birth Year ");
var age = currYear - bthYear;
document.write("<br><h1>Age Calculator</h1><br><br>");
document.write("Current Year: ", currYear);
document.write("<br>Birth Year: ", bthYear);
document.write("<br>Your Age is : ", age);

///////////////////////////////////////////////////////////////////////

// Q.12)
var r = 20;
var cf = (2 * (3.142) * r);
var area = 3.142 * (r * r);

document.write("<br><h1>The Geometrizer</h1>")
document.write("<br> Radius of a circle: " , r);
document.write("<br> The circumference is: " , cf);
document.write("<br> The area is: " , area);

///////////////////////////////////////////////////////////////////////

// Q.13)
var favSnack = "chocolate chip";
var curAge = 15;
var maxAge = 65;
var noPerDay = 3;
var totalNeed = (maxAge - curAge) * (noPerDay) ;

document.write("<br><h1> The Lifetime Supply Calculator </h1>")
document.write("<br> Favourite Snack: ", favSnack);
document.write("<br> Current age: ", curAge);
document.write("<br> Estimated Maximum Age: ", maxAge);
document.write("<br> Amount of snacks per day ", noPerDay);
document.write("<br> You will need " + totalNeed + " " + favSnack + " to last you  until the ripe old age of ", maxAge);



