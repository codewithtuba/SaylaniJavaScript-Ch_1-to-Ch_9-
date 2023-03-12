// Q.1)
let j = prompt("Enter a number");
document.write("Result: <br>");
document.write("The value of a is: ", j);
document.write("<br> .................................... <br>");

document.write("<br> The value of ++a is: ", ++j);
document.write("<br> Now the value of a is: ", j);

document.write("<br><br> The value of a++ is: ", j++);
document.write("<br> Now the value of a is: ", j);

document.write("<br><br> The value of --a is: ", --j);
document.write("<br> Now the value of a is: ", j);

document.write("<br><br> The value of a-- is: ", j--);
document.write("<br> Now the value of a is: ", j);

////////////////////////////////////////////////////////////////////////////

// Q.2)
var x = 2;
var y = 1;
document.write("<br><br><h1>Variables Values </h1>");
document.write("Value of x is: ", x);
document.write("<br>Value of y is: ", y);

document.write("<br> The value of <b>--x</b> is: ", (--x));
document.write("<br> The value of <b>--x - --y</b> is: ",(--x) - (--y));
document.write("<br> The value of <b>--x - --y + ++y</b> is: ",(--x) - (--y) + (++y));

document.write("<br> The value of result <b>--x - --y + ++y + y--</b> is: ",(--x) - (--y) + (++y) + (y--));


// var result = --x - --y + ++y + y--;
// document.write("<br>Value of result: ", result);

////////////////////////////////////////////////////////////////////////////

// Q.3)
var userName = prompt("Enter your name");
alert("Hello " + userName);

////////////////////////////////////////////////////////////////////////////

// Q.4)
const table = 5;
var tableNum = prompt("Enter a Table Number");
if(tableNum > 0) {
    document.write("<br><br> <b>Table of ",tableNum + "</b>");
    for(let i = 1; i <=10; i++) {
        document.write("<br>" + tableNum + " * " + i + " = " + tableNum * i);
    }
}
else {
    document.write("<br><br> <b>Table of " + table + "</b>");
    for(let x = 1; x <=10; x++) {
        document.write("<br>" + table + " * " + x + " = " + table * x);
    }
}
////////////////////////////////////////////////////////////////////////////

// Q.5)
let english = parseInt(prompt("Enter a marks of English subject "));
let maths = parseInt(prompt("Enter a marks of maths subject "));
let urdu = parseInt(prompt("Enter a marks of Urdu subject "));

let noOfsubj = 3;
let totalnum = 100;
let allSubMarks = totalnum * noOfsubj;
const totalMarksSub = 100 * noOfsubj;
let pereng = parseInt(((english) / totalnum) * 100);
let permath = parseInt(((maths) / totalnum) * 100);
let perurdu = parseInt(((urdu) / totalnum) * 100);
let totalPer = parseInt(((english + maths + urdu) / totalMarksSub ) * 100);

// console.log(parseFloat(percg));

document.write("<br><br><b>Subject &nbsp; &nbsp; &nbsp;");
document.write("<b>Total Marks &nbsp; &nbsp; &nbsp;");
document.write("<b>Obtained Marks &nbsp; &nbsp; &nbsp;");
document.write("<b>Percentage");

document.write("<br>English &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;");
document.write("100 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;");
document.write(english + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;");
document.write(pereng + "%");

document.write("<br>Maths &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;")
document.write("100 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;")
document.write(maths + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;");
document.write(permath + "%");

document.write("<br>Urdu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;")
document.write("100 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;")
document.write(urdu + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;");
document.write(perurdu  + "%");

document.write("<b><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + allSubMarks)
document.write("&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + (english + maths + urdu));
document.write("&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + totalPer + "%");







