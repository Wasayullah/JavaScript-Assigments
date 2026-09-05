/*
Chapter - 1: ALERTS

alert("Hey There!");
alert("Error! Please enter a valid password.");
alert("Welcome to JS Land...\nHappy Coding!");
alert("Welcome to JS Land...");
alert("Happy Coding!\nPrevent this page from creating additional dialogs.");
*/
//----------------------------------------------------------------------------------------------------------------

/*
Chapter-2 : VARIABLES FOR STRINGS
//1.Declare a variable called username.


let username;


//2.Declare a variable called myName & assign to it a string that represents your Full Name.

let myName = "Mohammad Wasayullah";
alert("My name is " + myName);

//example>>

username = prompt("Enter your name:");
alert("Welcome " + username + "!");

//3.Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.

    let message;
    message = "Hello World";
    alert(message);

//4.Write a script to save student’s bio data in JS variables and show the data in alert boxes.

    let name_ = "Johne Doe";
    let age = "15 years old";
    let course = "Certified Mobile Application Development";

    alert(name_);
    alert(age);
    alert(course);

//5.Write a script to display the following alert using one JS variable:

    alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//6. Declare a variable called email and assign to it a string that represents your Email Address. Show the blow mentioned message in an alert box.

    let email = "wasayullahmohammad@gmail.com";
    alert("My email address is " + email);

//7.Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

    let book = "A smarter way to learn JavaScript";
    alert("I am trying to learn from the Book " +' '+ book);

//8.Write a script to display this in browser through JS

    document.body.innerHTML += "<p>Yah! I can write HTML content through JavaScript</p>";

//9.Write a script to display the following message on your browser through JS

    let design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(design);
*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapter - 3 : VARIABLES FOR NUMBERS


    //1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age =18;
alert("I am " + age + " years old");

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: "You have visited this site N times".
var visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
alert("You have visited this site " + visitCount + " times");

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2005;
document.writeln("My birth year is " + birthYear + "<br>");
document.writeln("Data type of my declared variable is " + typeof(birthYear) + "<br><br>");
//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
//a. Visitor's name
//b. Product title
//c. Quantity i.e. how many products a visitor wants to order
//Show the following message in your browser: "John Doe ordered 5 T-shirt(s) on XYZ Clothing store".

var visitorName = prompt("Enter your name:");
var productTitle = prompt("Enter product title:");
var quantity = prompt("Enter quantity:");

document.writeln(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");
*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapter - 4 : VARIABLE NAMES: LEGAL & ILLEGAL
//1. Declare 3 variables in one statement.
var var1, var2, var3;
//2. Declare 5 legal & 5 illegal variable names.
//Legal variable names
var myName;
var age;
var $salary;
var _address;
var city1;
//Illegal variable names
//var 1stName; //starts with a number
//var my-name; //contains hyphen
//var var; //reserved keyword
//var my name; //contains space
//var @age; //contains special character
//3. Display this in your browser
document.writeln("<h1>Rules for naming JS variables</h1>");
document.writeln("Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable<br>");
document.writeln("Variables must begin with a letter, $, or _. For example: $name, _name or name<br>");
document.writeln("Variable names are case sensitive<br>");
document.writeln("Variable names should not be JS keywords<br>");
*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapter - 5 : MATH EXPRESSIONS

// 1.Write a program that take two numbers & add them in a new variable. Show the result in your browser.

num_1 = prompt("Enter first number:");
num_2 = prompt("Enter second number:");
document.writeln("The sum of ", num_1, " and ", num_2, " is ", Number(num_1) + Number(num_2), "<br>");



// 2. Repeat task1 for subtraction, multiplication, division & modulus.

document.writeln("The difference of ", num_1, " and ", num_2, " is ", Number(num_1) - Number(num_2), "<br>");

document.writeln("The product of ", num_1, " and ", num_2, " is ", Number(num_1) * Number(num_2), "<br>");

document.writeln("The quotient of ", num_1, " and ", num_2, " is ", Number(num_1) / Number(num_2), "<br>");
document.writeln("The modulus of ", num_1, " and ", num_2, " is ", Number(num_1) % Number(num_2), " <br><br>");



// 3.Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.


var a;
document.writeln("The value of a is: ", a, "<br>");
a = 5;
document.writeln("The value of a is: ", a, "<br>");

document.writeln("The Initial value of a is: ", a, "<br>");

++a;

document.writeln("Value after increment is ", a, "<br>");

a = a + 7;
document.writeln("Value after addition is: ", a, "<br>");

--a;
document.writeln("Value after decrement is: ", a, "<br>");

a = a % 3;

document.writeln("The remainder is : ", a, "<br>");



// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var ticketCost = 600;
document.writeln("Total cost to buy 5 Tickets to a movie is ", ticketCost * 5, "PKR<br><br>");



// 5. Write a script to display multiplication table of any number in your browser.

tableNum = prompt("Enter a number to diplay its table: ");
document.writeln("The multiplication number of ", tableNum, " <br>");
for (var i = 1; i <= 10; i++) {
    document.writeln(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}



// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a.Store a Celsius temperature into a variable.
// b.Convert it to Fahrenheit & output “NNoC is NNoF”.
// c.Now store a Fahrenheit temperature into a variable.
// d.Convert it to Celsius & output “NNoF is NNoC”.


var celsius = parseFloat(prompt("Enter the temperature in Cesius: "));
var celTofah = (celsius * 9 / 5) + 32;
document.writeln(celsius, "&deg;C is ", celTofah, "&deg;F<br>");

var fahrenheit = parseFloat(prompt("Enter the temperature in Farenheit: "));
fahTocel = (fahrenheit - 32) * 5 / 9;
document.writeln(fahrenheit, "&deg;F is ", fahTocel, "&deg;C");



// 7.Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges Compute the total cost & show the receipt in your browser.  8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


document.writeln("<h1>Shopping Cart</h1>");
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 + priceItem2 + shippingCharges);
document.writeln("Price of item 1 is: ", priceItem1, "<br>");
document.writeln("Quantity of item 1 is: ", quantityItem1, "<br>");
document.writeln("Price of item 2 is: ", priceItem2, "<br>");
document.writeln("Quantity of item 2 is: ", quantityItem2, "<br>");
document.writeln("Shipping Charges: ", shippingCharges, "<br>");
document.writeln("Total cost of your order is: ", totalCost);



// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.writeln("<h1>Mark Sheet</h1>")
var marksFull = 980;
var marksObtained = 804;
var percentage = (marksObtained / marksFull) * 100
document.writeln("Total marks: ", marksFull, "<br>Marks Obtained: ", marksObtained, "<br>Percentage: ", percentage, "%")



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.writeln("<h1>Currency in PKR</h1>");
var USDtoPKR = 104.80 * 10; var SDRtoPKR = 28 * 25;



// 10.  Write a program to initialize a variable with some number and do arithmetic in following sequence:
// Perform all calculations in a single expression
// a. Add 5 ;
// b. Multiply by 10 ;
// c. Divide the result by 2
var num = 1; num += 5; num *= 10; num /= 2;
document.writeln("The final result after arithmetic operations is: " + num + "<br><br>");


// 11.  The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
document.writeln("<h1>Age Calculator</h1>");
var currentYear = 2026;
var birthYear = prompt("Enter you birth year: ");
age1 = currentYear - birthYear;
age2 = age1 - 1;
document.writeln("Your Age is: ", age1, " or ", age2, "<br><br>");



// 12.  The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
//  area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.writeln("<h1>The Geometrizer</h1>");
var radius = parseFloat(prompt("Enter the value of radius: "));
circumference = 2 * Math.PI * radius;
area = Math.PI * radius ** 2;
document.writeln("Circumference of Circle: ", circumference, "<br>", "Area of the circle is: ", area)


//13.The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life. Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.writeln("<h1>The Lifetime Supply Calculator</h1>");
var favoriteSnack = prompt("Enter the name of your favourite snack: ");
var currentAge = prompt("Enter your current age: ");
var maxAge = prompt("Enter your estimated maximum age: ");
var amountPerDay = prompt("How many times do you eat these snacks a day: ");
var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountPerDay;

document.writeln("You will need ", totalSnacks, " " + favoriteSnack, " to last you until the ripe old age of ", maxAge, "<br>");
*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapters - 6 to 9 : MATH EXPRESSIONS

// 1.  Write a program to take a number in a variable, do the  required arithmetic to display the following result in your browser:
let a = +prompt("Enter the value of a")
document.getElementById("ch-6_question_1").innerHTML=`

<p class="fs-4 fw-bold">Result:</p>
<p class="fs-4">The value of a is: ${a}</p>
<p class="fs-4 fw-bold">...................................................</p<br<br>
<p class="fs-4">The value of ++a is: ${++a}</p>
<p class="fs-4">Now the value of a is: ${a}</p><br><br>
<p class="fs-4">The value of a++ is: ${a++}</p>
<p class="fs-4">Now the value of a is: ${a}</p><br><br>
<p class="fs-4">The value of --a is: ${--a}</p>
<p class="fs-4">Now the value of a is: ${a}</p><br><br>
<p class="fs-4">The value of a-- is: ${a--}</p>
<p class="fs-4">Now the value of a is: ${a}</p>
`

// 2.  What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//  Explain the output at each stage:
//  --a ;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--;

//Answer:
// a = 1;
// b = 0
// result = 3;
//Explaination:

// In  first step  the value of "a" will first decreased and the go to solve further because of the pre-decrement(--a). At this stage "a = 1" , "b = 1" , and "result = 1"

// In second step the value "1"  will experience a decrement of 0 .This is because the pre-decrementing(--b) of b. At this stage "a = 1" , "b = 0", and "result = 1"

// In third step the value "1" will experience an increment of 1 due to the pre-incrementing (++b) of "b". At this stage "a = 1" , "b = 1", and "result = 2"

// In the final step the value "2" will experience an increment of 1 due to the value stored in "b", however the value of "b" will become "0" because of the post-decrementing(b--) but will not affect the "result". At this stage "a = 1" , "b = 0", and "result = 3"

document.getElementById("ch-6_question_2").innerHTML=`
<p class="fs-4"> a is: ${a}</p>
<p class="fs-4"> b is: ${b}</p>
<p class="fs-4"> result is: ${result}</p>
`
// 3. Write a program that takes input a name from user & greet the user.
const _name = prompt("Enter your name");
document.getElementById("ch-6_question_3").innerHTML=`
<strong><p class = "fs-4">Assalam-u-alaikum ${_name} , Welcome to my webpage.</p>
`

//4. #NO-Question found.

//5. Write a program to take input a number from user &  display it’s multiplication table on your browser. If user  does not enter a new number, multiplication table of 5  should be displayed by default.

let number = Number(prompt("Enter a number to display it multiplication table", 5))
document.getElementById("ch-6_question_5").innerHTML += `<h1 class = "fs-4">Multiplication table of ${number}</h1>`
for (let i = 1; i <= 11; i++) {
    let j = number * i;
    document.getElementById("ch-6_question_5").innerHTML += `


    <p class = "fs-4">${number} x ${i} = ${j}
    <br></p>
    `
}


//6. Take
//  a) Take three subjects name from user and store them in 3  different variables.
//  b) Total marks for each subject is 100, store it in another  variable.
//  c) Take obtained marks for first subject from user and  stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user  and store them in variables.
//  e) Now calculate total marks and percentage and show the  result in browser like this.(Hint: user table)

let subject_1 = prompt("Enter the name of first subject","Computer");
let subject_2 = prompt("Enter the name of second subject","Physics");
let subject_3 = prompt("Enter the name of third subject","Maths");

const each_subject = 100;

const marksSubject_1 = +prompt(`Enter your obtained marks in ${subject_1}`);
const percentage_1 = marksSubject_1/each_sub;
const marksSubject_2 = +prompt(`Enter your obtained marks in ${subject_2}`);
const percentage_2 = marksSubject_2/each_subject;
const marksSubject_3 = +prompt(`Enter your obtained marks in ${subject_3}`);
const percentage_3 = marksSubject_3/each_subject;

const obtained = marksSubject_1 + marksSubject_2 + marksSubject_3;

const total = 300;
const total_Percentage = (obtained / total).toFixed(2);

document.getElementById("ch-6_question_6").innerHTML += `
<h1 class="heading text-center">Marksheet</h1>
<table class="table text-center" style = "width:50%;" border="5">
    <tr>
        <th class="bg-dark text-white">Subject</th>
        <th class="bg-dark text-white">Total</th>
        <th class="bg-dark text-white">Obtained</th>
        <th class="bg-dark text-white">Percentage</th>
    </tr>
    <tr>
        <td class="bg-success text-white">${subject_1}</td>
        <td class="bg-wheat">${each_subject}</td>
        <td class="bg-wheat">${marksSubject_1}</td>
        <td class="bg-wheat">${percentage_1}</td>
    </tr>
    <tr>
        <td class="bg-success text-white">${subject_2}</td>
        <td class="bg-wheat">${each_subject}</td>
        <td class="bg-wheat">${marksSubject_2}</td>
        <td class="bg-wheat">${percentage_2}</td>
    </tr>
    <tr>
        <td class="bg-success text-white">${subject_3}</td>
        <td class="bg-wheat">${each_subject}</td>
        <td class="bg-wheat">${marksSubject_3}</td>
        <td class="bg-wheat">${percentage_3}</td>
    </tr>
    <tr>
        <td class=" fs-5 bg-primary text-white">Result</td>
        <td class=" fs-5 bg-dark text-white">${total}</td>
        <td class=" fs-5 bg-dark text-white">${obtained}</td>
        <td class="fs-5 bg-dark text-white">${total_Percentage}</td>
    </tr>
</table>


`
*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapters - 9 to 11 : USER INPUT & CONDITIONAL
STATEMENT

// 1.  Write a program to take “city” name as input from user.If  user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let city = prompt("Enter the name of you city").toLowerCase();

if(city == "karachi"){
    document.getElementById("ch-9_question_1").innerHTML+=`
    <p class = fs-4>Welcome to the city of lights ✨</p>
    `
}else if(city == "peshawar"){
    document.getElementById("ch-9_question_1").innerHTML+=`
    <p class = fs-4>Welcome to the city of flowers🌸🌺</p>
    `
}else{
    document.getElementById("ch-9_question_1").innerHTML+=`
<p class = fs-4>${city} is a good city</p>
`
}

// 2. Write a program to take “gender” as input from user. If the  user is male, give the message: Good Morning Sir. If the  user is female, give the message: Good Morning Ma’am.

gender = prompt("Enter your gender (Male or Female)","Male").toLowerCase();
if(gender == "male"){
    document.getElementById("ch-9_question_2").innerHTML+=`
    <p class = "fs-4">Good Morning Sir.
    `
}else if(gender == "female"){
    document.getElementById("ch-9_question_2").innerHTML+=`
    <p class = "fs-4">Good Morning Ma'am.
    `
}else{
    document.getElementById("ch-9_question_2").innerHTML+=`
    <p class = "fs-4">Please enter a valid gender🙏.
    `
}

// 3. Write a program to take input color of road traffic signal  from the user & show the message according to this table:

let color = prompt("Enter the traffic light color", "red").toLowerCase();

let output = `
<table class="table" style = "width:50%;">
<tr>
<th class="text-primary bg-dark">Signal color</th>
<th class="text-primary bg-dark">Message</th>
</tr>
`;

if (color === "red") {
    output += `
    <tr>
        <td class="text-white bg-danger">Red </td>
        <td class="text-white bg-danger">Must Stop 🤚</td>
    </tr>`;
}
else if (color === "yellow") {
    output += `
    <tr>
        <td class="text-dark bg-warning">Yellow</td>
        <td class="text-dark bg-warning">Ready to Move 😇</td>
    </tr>`;
}
else if (color === "green") {
    output += `
    <tr>
        <td class="text-white bg-success">Green</td>
        <td class="text-white bg-success">Move Now ✅</td>
    </tr>`;
}
else {
    output += `
<tr>
    <td colspan="2" class="text-danger bg-dark">Invalid Color 🧐</td>
    </tr>`;
}


output += `</table>`;

document.getElementById("ch-9_question_3").innerHTML = output



//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25 litres,  show the message “Please refill the fuel in your car”

fuel = +prompt("Enter the amount of fuel left in your car ",10);
let output ;
if(fuel <= 0.25){
    output = `
    <p class = "fs-4 bg-dark text-danger" style = "width:50%;">Please refill the fuel in your car</p>
    `
}else if(fuel > 0.25){
    output=
    `<p class = "fs-4 bg-dark text-success" style = "width:50%;">Ok have a good-ride </p>`
}
document.getElementById("ch-9_question_4").innerHTML = output;


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a.
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true"); }
//ANSWER:
// "Alert message displayed"

//b.
//  var b = 82;
//  if (b++ === 83){
//  alert("given condition for variable b is true"); }
//ANSWER:
// "Alert message doesn't displayed"

//c.
//  var c = 12;
//  if (c++ === 13){
//  alert("condition 1 is true"); }
//  if (c === 13){
//  alert("condition 2 is true"); }
//  if (++c < 14){
//  alert("condition 3 is true"); }
//  if(c === 14){
//  alert("condition 4 is true"); }
//ANSWER:
// "Alert message 2 & 4 displayed"

//d.
//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//  alert("The cost equals"); }
//ANSWER:
// "Alert message displayed"

//e.
//  if (true){
//  alert("True"); }
//  if (false){
//  alert("False"); }
//ANSWER:
// "Alert message displayed"

//f.
//  if("car" < "cat"){
//  alert("car is smaller than cat"); }
//ANSWER:
// "Alert message displayed"



//6. Write a program to take input the marks obtained in three  subjects & total marks. Compute & show the resulting  percentage on your page. Take percentage & compute  grade as per following table:

var sub_1_total = +prompt("Enter your total marks in Subject_1");
var sub_1_obtained = +prompt("Enter your obtained marks in Subject_1");
var sub_2_total = +prompt("Enter your total marks in Subject_2");
var sub_2_obtained = +prompt("Enter your obtained marks in Subject_2");
var sub_3_total = +prompt("Enter your total marks in Subject_3");
var sub_3_obtained = +prompt("Enter your obtained marks in Subject_3");

var obtained = sub_1_obtained+sub_2_obtained+sub_3_obtained;
var total = sub_1_total+sub_2_total+sub_3_total
var percentage = ( (obtained/total)*100).toFixed(2)


if(percentage>=80){
    var grade = "A-one"
    var remarks = "Excellent"
}else if(percentage>=70){
    var grade = "A"
    var remarks = "Good"
}
else if(percentage>=60){
    var grade = "B"
    var remarks = "You need to improve"
}
else{
    var grade = "Fail"
    var remarks = "Sorry"
}
var output = `
    <h1>Marksheet</h1><br><br>
    <p class = fs-4>Total marks: ${total}</p>
    <p class = fs-4>Marks obtained: ${obtained}</p>
    <p class = fs-4>Percentage: ${percentage}%</p>
    <p class = fs-4>Grade: ${grade}</p>
    <p class = fs-4>Remarks: ${remarks}</p>

`
document.getElementById("ch-9_question_6").innerHTML = output;


// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
//  a. If user guesses the same number, show “Bingo! Correct  answer”.
//  b. If the guessed number +1 is the secret number, show
//  “Close enough to the correct answer”.

var num = 50;
close_answer = num-1;
guess = +prompt("Enter a number to guess the secret number")

if(guess == num){
    output = `<p class = "fs-4">Bingo! Correct  answer</p>`
}else if(guess == close_answer){
    output = `<p class = "fs-4">Close enough to the correct answer</p>`
}else{
    output = `<p class = "fs-4">Try again</p>`
}
document.getElementById("ch-9_question_7").innerHTML = output;



// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var number = +prompt("Enter a number to check whether it is divisible by 3 or not.")
if(number%3==0){
    output = `<p class = "fs-4">The number is divisible by 3</p>`
}else{
    output = `<p class = "fs-4">The number is not divisible by 3</p>`
}
document.getElementById("ch-9_question_8").innerHTML = output;


//9. Write a program that checks whether the given input is an even number or an odd number.

var number = +prompt("Enter a number to check whether it is odd or even")
if(number%2==0){
    output = `<p class = "fs-4">The number is Even</p>`
}else{
    output = `<p class = "fs-4">The number is Odd</p>`
}
document.getElementById("ch-9_question_9").innerHTML = output;


// 10. Write a program that takes temperature as input and shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”
var T = +prompt("Enter the vlue of temperature")

if(T>=40){
    output = `<p class = "fs-4">It is too hot outside.</p>`
}else if(T>=30){
    output = `<p class = "fs-4">The Weather today is Normal.</p>`
}else if(T>=20){
    output = `<p class = "fs-4">Today’s Weather is cool.</p>`
}
else{
    output = `<p class = "fs-4">OMG! Today’s weather is so Cool.</p>`
}
document.getElementById("ch-9_question_10").innerHTML = output;


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var op = prompt("Enter operation (+, -, *, /, %)");

var output;

if(op === "+"){
    output = `<p class = "fs-4">Result: ${num1 + num2}</p>`;
}
else if(op === "-"){
    output = `<p class = "fs-4">Result: ${num1 - num2}</p>`;
}
else if(op === "*"){
    output = `<p class = "fs-4">Result: ${num1 * num2}</p>`;
}
else if(op === "/"){
    if(num2 === 0){
        output = `<p class = "fs-4 text-danger">Error: Cannot divide by zero</p>`;
    } else {
        output = `<p class = "fs-4">Result: ${num1 / num2}</p>`;
    }
}
else if(op === "%"){
    if(num2 === 0){
        output = `<p class = "fs-4 text-danger">Error: Cannot divide by zero</p>`;
    } else {
        output = `<p class = "fs-4">Result: ${num1 % num2}</p>`;
    }
}
else{
    output = `<p class = "fs-4 text-danger">Invalid operation</p>`;
}

document.getElementById("ch-9_question_11").innerHTML = output;
*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapters - 12 to 13 : IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS


// 1.  Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.(Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var ch = prompt("Enter a character");
var code = ch.charCodeAt(0);
var output;

if(code >= 48 && code <= 57){
    output = `<p class = "fs-4">It is a number</p>`;
}
else if(code >= 65 && code <= 90){
    output = `<p class = "fs-4">It is an uppercase letter</p>`;
}
else if(code >= 97 && code <= 122){
    output = `<p class = "fs-4">It is a lowercase letter</p>`;
}
else{
    output = `<p class = "fs-4">Unknown character</p>`;
}

document.getElementById("ch-12_question_1").innerHTML = output;


//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var output;

if(num1 > num2){
    output = `<p class = "fs-4">${num1} is larger</p>`;
}
else if(num2 > num1){
    output = `<p class = "fs-4">${num2} is larger</p>`;
}
else{
    output = `<p class = "fs-4">Both numbers are equal</p>`;
}

document.getElementById("ch-12_question_2").innerHTML = output;


// 3. Write a program that takes input a number from user &  state whether the number is positive, negative or zero.

var num = +prompt("Enter a number");
var output;

if(num > 0){
    output = `<p class = "fs-4">Positive number</p>`;
}
else if(num < 0){
    output = `<p class = "fs-4">Negative number</p>`;
}
else{
    output = `<p class = "fs-4">Zero</p>`;
}

document.getElementById("ch-12_question_3").innerHTML = output;


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var ch = prompt("Enter a character").toLowerCase();
var output;

if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
    output = `<p class = "fs-4">True</p>`;
}
else{
    output = `<p class = "fs-4">False</p>`;
}

document.getElementById("ch-12_question_4").innerHTML = output;


// 5. Write a program that
//  a. Store correct password in a JS variable
//  b.  Asks user to enter his/her password
//  c.   Validate the two passwords:
//    i. Check if user has entered password. If not, then give message “ Please enter your password”
//    ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

var correctPassword = "12345";
var userPassword = prompt("Enter your password");
var output;

if(!userPassword){
    output = `<p class = "fs-4 text-danger">Please enter your password</p>`;
}
else if(userPassword === correctPassword){
    output = `<p class = "fs-4 text-success">Correct! The password you entered matches the original password</p>`;
}
else{
    output = `<p class = "fs-4 text-danger">Incorrect password</p>`;
}

document.getElementById("ch-12_question_5").innerHTML = output;


//6. This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//if (hour < 18) {
//greeting = "Good day";
//else
//greeting = "Good evening";
//}

//ANSWER:
output = `<span class = "fs-4 text-primary">
. <span class = "fs-4 text-danger">"{"</span> was opened after if <br>
. But <span class = "fs-4 text-danger">"}"</span>  was missing before else<br>
. Also <span class = "fs-4 text-danger">"{"</span> is missing after opening else <br></span>
<br>
<span class = "fs-4  px-3 text-white bg-success">The correct code is here below 👇</span>
<br><br>

    <p class = "fs-4 py-3 px-3 bg-dark text-white border rounded-4" style = "width: 20%;" >
var greeting; <br>
var hour = 13;  <br>
if (hour < 18) {  <br>
greeting = "Good day";  <br>
else{  <br>
greeting = "Good evening";  <br>
}  <br>
    </p>`;
document.getElementById("ch-12_question_6").innerHTML = output;


//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var time = +prompt("Enter time in 24-hour format (e.g. 1900)");
var output;
if(!time){
    output = `<p class = "fs-4 text-danger">Please enter the time</p>`;
}else if(time >= 0 && time < 1200){
    output = `<p class = "fs-4">Good Morning</p>`;
}
else if(time >= 1200 && time < 1700){
    output = `<p class = "fs-4">Good Afternoon</p>`;
}
else if(time >= 1700 && time < 2100){
    output = `<p class = "fs-4">Good Evening</p>`;
}
else if(time >= 2100 && time <= 2359){
    output = `<p class = "fs-4">Good Night</p>`;
}
else{
    output = `<p class = "fs-4 text-danger">Invalid time</p>`;
}

document.getElementById("ch-12_question_7").innerHTML = output;

*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapters - 14 to 16 : ARRAYS

// 1.  Declare an empty array using JS literal notation to store student names in future.
var output = `var array =[]`
document.getElementById("chapter-14_question_1")

//  2. Declare an empty array using JS object notation to store student names in future.
var output=`var obj = new Object()`
document.getElementById("chapter-14_question_2")

//  3. Declare and initialize a strings array.
var output=`var str = ["Mohammad","Wasayullah","Javascript"]`
document.getElementById("chapter-14_question_3")

//  4.  Declare and initialize a numbers array.
var output=`var numbers = [1,2,3]`
document.getElementById("chapter-14_question_4")

//  5.  Declare and initialize a boolean array.
var output=`var boolean = [true , false , true]`
document.getElementById("chapter-14_question_5")

//  6. Declare and initialize a mixed array.
var output=`var mixed = ["Mohammad",3,true]`
document.getElementById("chapter-14_question_6")

//  7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

var output = `<p class = "fs-4 fw-bold">Qualifications:</p>`;
for(var i=0;i<qualifications.length; i++){
    output+=`
    <p class="fs-5">${i+1}) ${qualifications[i]}</p>
    `
}
document.getElementById("ch-14_question_7").innerHTML = output;

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students

var names = ["Mohammad","Ali","Umer"]
var score = [408,278,409]

var output =`
<p class = "fs-4 ">Score of ${names[0]} is ${score[0]}.Percentage: ${(score[0]/500*100).toFixed(2)}<i><b>%</b></i></p>
<p class = "fs-4 ">Score of ${names[1]} is ${score[1]}.Percentage: ${(score[1]/500*100).toFixed(2)}<i><b>%</b></i></p>
<p class = "fs-4 ">Score of ${names[2]} is ${score[2]}.Percentage: ${(score[2]/500*100).toFixed(2)}<i><b>%</b></i></p>`
document.getElementById("ch-14_question_8").innerHTML= output;

*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapters - 17 to 20 : ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.
(Array of arrays)

let mainArray = [
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"],
]
var output =`
<p class = "fs-4 ">The y multidimensional array :>><br> ${mainArray.map(row => row.join(" ")).join("<br>")}</p>`
document.getElementById("ch-17_question_1").innerHTML= output;

// 2. Declare and initialize a multidimensional array representing the following matrix:

let mainArray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
]
var output =`
<p class = "fs-4 ">The y multidimensional array :>><br> ${mainArray.map(row => row.join(" ")).join("<br>")}</p>`
document.getElementById("ch-17_question_2").innerHTML= output;

// 3. Write a program to print numeric counting from 1 to 10.

for(var i=1 ; i<=10 ; i++){

    document.getElementById("ch-17_question_3").innerHTML+= `<p class = "fs-4 ">${i}</p>` ;
}

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

//⚠️ To view this question in browser, uncomment its entire structure from HTML file as well as this script file.
function table() {

    let num = document.getElementById("number").value;
    if (num === "") return;
    let heading = `Multiplication table of ${num}: `;
    document.getElementById("heading").innerHTML = heading;
    document.getElementById("table").innerHTML = "";

    for (let a = 1; a <= 10; a++) {
        let output = `<br> <p class = "fs-4 ">${num} x ${a} = ${a * num}</p>`;

        document.getElementById("table").innerHTML += output;
    }
}

function cancel() {
    document.getElementById("number").value = "";
    document.getElementById("heading").innerHTML = " ";
    document.getElementById("table").innerHTML = "";
}

// 5. Write a program to print items of the following array  using for loop:
//  fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var output = `<p class = "fs-4 ">Fruits List:</p>`;
for(var i=0; i<fruits.length; i++){
    output+= `<p class = "fs-4 ">${i+1}) ${fruits[i]}</p>`;
}
output+= `<p class = "fs-4 ">Element at index 0 is ${fruits[0]}</p>`;
output+= `<p class = "fs-4 ">Element at index 1 is ${fruits[1]}</p>`;
output+= `<p class = "fs-4 ">Element at index 2 is ${fruits[2]}</p>`;
output+= `<p class = "fs-4 ">Element at index 3 is ${fruits[3]}</p>`;
output+= `<p class = "fs-4 ">Element at index 4 is ${fruits[4]}</p>`;
document.getElementById("ch-17_question_5").innerHTML = output;

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var counting = "";
var reverseCounting = "";
var even = "";
var odd = "";
var series = "";
for(var i=1; i<=15; i++){
    counting+= `${i}, `
}
for(var i=10; i>=1; i--){
    reverseCounting+= `${i}, `
}
for(var i=0; i<=20; i+=2){
    even+= `${i}, `
}
for(var i=1; i<=20; i+=2){
    odd+= `${i}, `
}
for(var i=2; i<=20; i+=2){
    series+= `${i}k, `
}
var output = `
<p class = "fs-4 ">Counting: ${counting}</p>
<p class = "fs-4 ">Reverse counting: ${reverseCounting}</p>
<p class = "fs-4 ">Even: ${even}</p>
<p class = "fs-4 ">Odd: ${odd}</p>
<p class = "fs-4 ">Series: ${series}</p>
`
document.getElementById("ch-17_question_6").innerHTML = output;

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
var found = false;
for(var i=0; i<A.length; i++){
    if(A[i] === userInput){
        found = true;
        break;
    }
}
var output;
if(found){
    output = `<p class = "fs-4 text-success">Yes! ${userInput} is available at index ${i} in our bakery.</p>`;
}
else{
    output = `<p class = "fs-4 text-danger">We are sorry. ${userInput} is not available in our bakery.</p>`;
}
document.getElementById("ch-17_question_7").innerHTML = output;

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
var output = `<p class = "fs-4 ">Array items: ${A.join(" ")}</p>`;
var largest = A[0];
for(var i=1; i<A.length; i++){
    if(A[i] > largest){
        largest = A[i];
    }
}
output += `<p class = "fs-4 ">The largest number in the array is ${largest}</p>`;
document.getElementById("ch-17_question_8").innerHTML = output;

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]


var A = [24, 53, 78, 91, 12];
var output = `<p class="fs-4">Array items: ${A.join(" ")}`
var smallest =A[0]
for(i=1;i<A.length;i++){
    if(A[i]<smallest){
        smallest = A[i];
    }
}
output += `<p class = "fs-4 ">The smallest number in the array is ${smallest}</p>`;
document.getElementById("ch-17_question_9").innerHTML = output;

// 10. Write a program to print multiples of 5 ranging 1 to  100.
let multiples = []
for (i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        multiples.push(i);
    }
    let output = `<p class = "fs-4 ">${multiples.join(", ")}</p>`;
    document.getElementById("ch-17_question_10").innerHTML = output;
}

*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapters - 21 to 25 : STRING METHODS

// 1.  Write a program that takes two user inputs for first and  last name using prompt and merge them in a new variable  titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = firstName+" "+lastName;
let output = `<p class = "fs-4 ">Welcome ${fullName} 🫡</p>`;
document.getElementById("ch-21_question_1").innerHTML = output;

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var phone = prompt("Enter the name of your favourite phone")
let len = phone.length;
let output = `<p class = "fs-4 ">My favourite phone is: ${phone}</p>`;
output += `<p class = "fs-4 ">Length of string: ${len}</p>`;
document.getElementById("ch-21_question_2").innerHTML = output;

//3. Write a program to find the index of letter “n” in the word  “Pakistani” and display the result in your browser .

let str = "Pakistan"
let requiredIndex = str.indexOf("n")
let output = `<p class = "fs-4 "> string: ${str}<br>Index of 'n': ${requiredIndex}</p>`;
document.getElementById("ch-21_question_3").innerHTML = output;

// 4. Write a program to find the last index of letter “l” in the  word “Hello World” and display the result in your browser.

let str ="Hello World";
let requiredIndex = str.lastIndexOf("l")
let output = `<p class = "fs-4 "> string: ${str}<br>Index of 'l': ${requiredIndex}</p>`;
document.getElementById("ch-21_question_4").innerHTML = output;

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
let str ="Pakistani";
let requiredChar = str.charAt(3)
let output = `<p class = "fs-4 "> string: ${str}<br>Character at index 3:  ${requiredChar}</p>`;
document.getElementById("ch-21_question_5").innerHTML = output;

// 6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = firstName.concat(" ",lastName);
let output = `<p class = "fs-4 ">Welcome ${fullName} 🫡</p>`;
document.getElementById("ch-21_question_6").innerHTML = output;

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser

let city = "Hyderabad";
let replaced = city.replace("Hyder","Islam");
let output = `<p class = "fs-4 ">City: ${city}</p>`;
output += `<p class = "fs-4 ">After replacement: ${replaced}</p>`;
document.getElementById("ch-21_question_7").innerHTML = output;

// 8. Write a program to replace all occurrences of “and” in the  string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and  football together.”

var message = "Ali and Sami are best friends. They play cricket and  football together."
let replaced = message.replace("and","&");
let output = `<p class = "fs-4 ">Message: ${message}</p>`;
output += `<p class = "fs-4 ">After replacement: ${replaced}</p>`;
document.getElementById("ch-21_question_8").innerHTML = output;

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var str = "472";
let output = `<p class = "fs-4 ">Value:${str}<br>Type: ${typeof(str)}</p>`;
var num = 472;
output += `<p class = "fs-4 ">Value:${num}<br>Type: ${typeof(num)}</p>`;
document.getElementById("ch-21_question_9").innerHTML = output;

//10. Write a program that takes user input. Convert and show the input in capital letters.

var userInput = prompt("Write any thing");
var UpperCase = userInput.toUpperCase();
var output = `<p class = "fs-4 ">User input: ${userInput} </p>`;
output += `<p class = "fs-4 ">Upper case: ${UpperCase} </p>`;
document.getElementById("ch-21_question_10").innerHTML = output;

// 11. Write a program that takes user input. Convert and show the input in title case.

var userInput = prompt("Write any thing");
var first = userInput.slice(0,1).toUpperCase();
var remain = userInput.slice(1).toLowerCase();
var TitleCase = first+remain;
var output = `<p class = "fs-4 ">User input: ${userInput} </p>`;
output += `<p class = "fs-4 ">Title case: ${TitleCase} </p>`;
document.getElementById("ch-21_question_11").innerHTML = output;

//12. Write a program that converts the variable num to  string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

var num = 35.36 ;
var str = num.toString();
var result = str.replace(".","")
var output = `<p class = "fs-4 ">Number: ${num}<br>Rresult: ${result}</p>`;
document.getElementById("ch-21_question_12").innerHTML = output;

// 13. Write a program to take user input and store username  in a variable. If the username contains any special symbol  among [@ . , !], prompt the user to enter a valid username. For character codes of [@

var userName = prompt("Enter a valid username");
if(userName.includes("@") || userName.includes("!") || userName.includes(".") || userName.includes(",")){
    alert("Please enter a valid Username");
}else{
    var output = `<p class = "fs-4 ">Your username is: ${userName}</p>`;
document.getElementById("ch-21_question_13").innerHTML = output;
}

// 14. You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

var UserInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
var  A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
var found = false;
for(i=0;i<A.length;i++){
    if(UserInput == A[i]){
        found = true
        break
    }
}
var first = UserInput.slice(0,1).toUpperCase();
var remain = UserInput.slice(1).toLowerCase();
UserInput = first+remain;
if(found){
    
var output = `<p class = "fs-4 text-success">${UserInput} is available at index ${i} </p>`;

}else{
    output = `<p class = "fs-4 text-danger">Sorry ${UserInput} is not available at our backery</p>`;
}
document.getElementById("ch-21_question_14").innerHTML = output;

//15. Write a program to take password as an input from user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.

//⚠️ To view this question in browser, uncomment its entire structure from HTML file as well as this script file.
function check() {
    var getPass = document.getElementById("password").value;
    if (getPass.length < 6) {
        var error = "<p  class = 'text-danger'>Password must be at least 6 characters long</p>";
        document.getElementById("msg").innerHTML = error;
        return;
    }
    var first = getPass.slice(0, 1);
    
    if (first <= 48)
        error = "<p class = 'text-danger'>Password should not start with a number</p>";
    document.getElementById("msg").innerHTML = error;
    var hasLetter = /[a-zA-Z]/.test(getPass);
    var hasNumber = /[0-9]/.test(getPass);
    
    if (!hasLetter || !hasNumber) {
        error = "<p class = 'text-danger'>Password must contain both letters and numbers</p>";
        document.getElementById("msg").innerHTML = error
        return;
    }
    
    var sucesss = `<p class = "text-success">Password saved successfully</p>`
    document.getElementById("msg").innerHTML = success
}

//16. Write a program to convert the following string to an array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser.

var university = "University of Karachi";
let array = university.split("")
var output = "";
for (i = 0; i < array.length; i++) {
    output += `<p class='fs-4'>${i + 1}). ${array[i]}</p>`;
    document.getElementById("ch-21_question_16").innerHTML = output;
}

//17. Write a program to display the last character of a user input

//⚠️ To view this question in browser, uncomment its entire structure from HTML file as well as this script file.
function get(){
    var UserInput = document.getElementById("inp").value;
    var LastWord = UserInput.slice(-1)
    var output = `<p class="fs-4">User Input: ${UserInput}<br> Last character of input: ${LastWord}`
    document.getElementById("output").innerHTML = output;
}

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
let text = ("The quick brown fox jumps over the lazy dog").toLowerCase();
let Break = text.split(" ")
var i=0;
var j=0;
while(i<Break.length){
    if(Break[i] ==="the"){
        j++;
    }
    i++
}
var output = `<p class="fs-4">Text:The quick brown fox jumps over the lazy dog <br>There are ${j} occurrences of word the`
document.getElementById("ch-21_question_18").innerHTML = output;
*/

/*

//----------------------------------------------------------------------------------------------------------------

Chapters - 26 to 30 : MATH METHODS 
// 1.  Write a program that takes a positive integer from user & 
display the following in your browser. 
//a. number 
//b. round off value of the number 
//c. floor value of the number 
//d. ceil value of the number 

let num = +prompt("Enter a number");
let  output = `<p class="fs-4">The number is : ${num}</p> .<br>`;
document.getElementById("ch-26_question_1").innerHTML = output;
let round = Math.round(num);
output =`<p class="fs-4">The number when rounded-off:  ${round}</p> .<br>`;
document.getElementById("ch-26_question_1").innerHTML += output;
let floor = Math.floor(num);
output =`<p class="fs-4">The floor value of number is:  ${floor}</p> .<br>`;
document.getElementById("ch-26_question_1").innerHTML += output;
let ciel = Math.ceil(num);
output =`<p class="fs-4">The ciel value of number is:  ${ciel}</p> .<br>`;
document.getElementById("ch-26_question_1").innerHTML += output;

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

let num = +prompt("Enter a negative floating point number");
let output = `<p class="fs-4">The number is : ${num}</p> .<br>`;
document.getElementById("ch-26_question_2").innerHTML = output;
let round = Math.round(num);
output = `<p class="fs-4">The number when rounded-off:  ${round}</p> .<br>`;
document.getElementById("ch-26_question_2").innerHTML += output;
let floor = Math.floor(num);
output = `<p class="fs-4">The floor value of number is:  ${floor}</p> .<br>`;
document.getElementById("ch-26_question_2").innerHTML += output;
let ceil = Math.ceil(num);
output = `<p class="fs-4">The ceil value of number is:  ${ceil}</p> .<br>`;
document.getElementById("ch-26_question_2").innerHTML += output;

// 3. Write a program that displays the absolute value of a number.
//  E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let num = +prompt("Enter a number");
let output = `<p class="fs-4">The absolute value of ${num} is : ${Math.abs(num)}</p> .<br>`;
document.getElementById("ch-26_question_3").innerHTML += output;

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your browser.:

let diceValue = Math.floor(Math.random() * 6) + 1;
let output = `<p class="fs-4">Random dice value: ${diceValue+1}</p> .<br>`;
document.getElementById("ch-26_question_4").innerHTML += output;

// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your browser 

let randomValue = Math.floor(Math.random() * 2) + 1;
let output
if(randomValue == 1){
    output = `<p class="fs-4">${randomValue}<br>Random coin value: Heads </p> .<br>`;
}else{
    output = `<p class="fs-4">${randomValue}<br>Random coin value: Tails </p> .<br>`;
}
document.getElementById("ch-26_question_5").innerHTML += output;

// 6. Write a program that shows a random number between 1 and 100 in your browser.

let randomNum = Math.floor(Math.random() * 100) + 1;
output = `<p class="fs-4">Random number between 1 and 100: ${randomNum}</p> .<br>`;
document.getElementById("ch-26_question_6").innerHTML += output;

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms

var weight = parseFloat(prompt("Enter your weight in kilograms"))
output = `<p class="fs-4">The weight of user is ${weight} kilograms</p> .<br>`;
document.getElementById("ch-26_question_7").innerHTML += output;

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret
// number, congratulate the user. 
let secretNum = Math.floor(Math.random()*10)+1;
let userNum = Number(prompt("Guess a number between 1 and 10 !"))
if(secretNum==userNum){
    output = `<p class="fs-4">Congrats you Guessed the number ✨</p>`;
}
else{
    output = `<p class="fs-4">Try again 🙃</p>`;
}
document.getElementById("ch-26_question_8").innerHTML += output;
*/

//----------------------------------------------------------------------------------------------------------------

/*
Chapters - 31 to 34 : DATE METHODS 

// 1. Write a program that displays current date and time in  your browser. 
let date = new Date()
output = `<p class="fs-4">${date}</p>`;
document.getElementById("ch-31_question_1").innerHTML += output;

// 2. Write a program that alerts the current month in words.
//  For example December

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];
output = `<p class="fs-4">${name}</p>`;
document.getElementById("ch-31_question_2").innerHTML += output;

// 3. Write a program that alerts the first 3 letters of the current  
// day, for example if today is Sunday then alert will show Sun. 

const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const d = new Date();
let name = day[d.getDay()];
output = `<p class="fs-4">${name}</p>`;
document.getElementById("ch-31_question_3").innerHTML += output;

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today

const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const d = new Date();
let name = day[d.getDay()];

if(name == "Sat" || name == "Sun"){
    output = `<p class="fs-4">It's Fun day</p>`;
}else{
    output = `<p class="fs-4">It's ${name}-day</p>`;
}
document.getElementById("ch-31_question_4").innerHTML += output;

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”. 

const d = new Date();
let month = d.getMonth();

if(month <=15){
    output = `<p class="fs-4">First fifteen days of the month</p>`;
}else{
    output = `<p class="fs-4">Last days of the month</p>`;
}
document.getElementById("ch-31_question_5").innerHTML += output;
// 6. Write a program that determines the minutes since
//  midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

const dateNow = new Date();
const ms = dateNow.getTime();
const min = ms / 60000;
output = `<p class="fs-4">Current Date: ${dateNow}</p>`;
output += `<p class="fs-4">Elapsed Milliseconds since 1 January 1970: ${ms} ms</p>`;
output += `<p class="fs-4">Elapsed Minutes since 1 January 1970: ${min}</p>`;
document.getElementById("ch-31_question_6").innerHTML += output;

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

const dateNow = new Date();
const hr = dateNow.getHours();
if(hr<12){
    output = `<p class="fs-4">It's AM</p>`;
}else{
    output = `<p class="fs-4">It's PM</p>`;
}
console.log(hr)
document.getElementById("ch-31_question_7").innerHTML += output;

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

const laterDate = new Date("2020-12-31");

output = `<p class="fs-4">Later Date: ${laterDate}</p>`;
document.getElementById("ch-31_question_8").innerHTML += output;

// 9. Create a date object of the starting date of this Ramadan and 
// alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

const date  = new Date();
const day = date.getDate()

const ramadanDate = new Date(2015 , 5 ,18)
const ramadanday = ramadanDate.getDate()

const daysPast = ramadanDate-day;

output = `<p class="fs-4">${daysPast} days have past since 1st Ramadan,2015</p>`;
document.getElementById("ch-31_question_9").innerHTML += output;

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015. 
const date  = new Date();
const sec = date.getSeconds()

const fifteenDate = new Date(2015 , 0 ,1)

const fifteensec = fifteenDate.getSeconds()

const secsPast = fifteenDate-sec;
output = `<p class="fs-4">On refrence date ${date} , ${secsPast} seconds have past since the beggining of 2015</p>`;
document.getElementById("ch-31_question_10").innerHTML += output;

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser

const date = new Date();
let output = `<p class="fs-4">Current Date: ${date}</p>`;
const currentHours = date.getHours();
date.setHours(currentHours + 1);
output += `<p class="fs-4">Updated Date (1 hour ahead): ${date}</p>`;
document.getElementById("ch-31_question_11").innerHTML = output;

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

const date = new Date();
const currentYear = date.getFullYear();
date.setFullYear(currentYear-100);
alert(`The Date is : ${date}`)
output += `<p class="fs-4">The alert is displayed 👆</p>`;
document.getElementById("ch-31_question_12").innerHTML = output;

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser. 

const age = Number(prompt("Enter your age: "));
const currentDate = new Date();
const getYear = currentDate.getFullYear();
const birthYear= getYear-age;
output = `<p class="fs-4">Your Birth Year is : ${birthYear}</p>`;
document.getElementById("ch-31_question_13").innerHTML = output;

// 14. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where, 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

const customerName = prompt(`Enter your name`);
const month = (new Date()).getMonth();
const Months =  ["January","February","March","April","May","June","July","August","September","October","November","December"];
const monthName = Months[month];
const units = Math.abs(Math.floor(Math.random()*200));
const ChargesPerUnit = 16;
const latePayment = 350;
const netAmount = units*ChargesPerUnit;
 let output = `
 <div class="card p-3 m-3 w-50 border-black rounded-3 d-flex flex-column flex-wrap text-left">
 
 <h1 class="text-center">K-Electric Bill</h1>
 <br>
 <br>
 <p class="fs-4">Customer Name: ${customerName};</p><hr>
 <p class="fs-4">Month: ${monthName};</p><hr>
 <p class="fs-4">Number of units: ${units};</p><hr>
 <p class="fs-4">Charges per unit: ${ChargesPerUnit};</p><hr>
 <p class="fs-4">Net Amount Payable (within Due Date): ${netAmount};</p><hr>
 <p class="fs-4">Late Payment Surcharge: ${latePayment};</p><hr>
 <p class="fs-4">Gross Amount Payable (after Due Date):  ${netAmount+latePayment};</p>
 </div>
 `;
 document.getElementById("ch-31_question_14").innerHTML = output;
 */

/*

//----------------------------------------------------------------------------------------------------------------

 Chapters - 35 to 38 : Function

// 1. Write a function that displays current date & time in your 
browser.
const date = () =>{
    let date = new Date()
    output = `<p class="fs-4">The date is :><br> <u>${date}</u></p>`
    document.getElementById("ch-35_question_1").innerHTML = output;
}
date()

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name. 
const greet =()=>{
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name: ");
    let fullName = (firstName+' '+lastName);
    output = `<p class="fs-4">Hello ${fullName} 👋</p>`
    document.getElementById("ch-35_question_2").innerHTML = output;
}
greet()

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers. 
const sum =(a,b)=>a+b;
let num_1 = Number(prompt("Enter a number"));
let num_2=  Number(prompt("Enter the second number"));
let result = sum(num_1,num_2);
output = `<p class="fs-4">Sum of ${num_1} and ${num_2} is : ${result}</p>`
document.getElementById("ch-35_question_3").innerHTML = output;

// 4. Calculator:  
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser. 

const Calculate = (a,op,b)=>{
    
    if(op==="+"){
        return a+b;
    }else if(op==="-"){
        return a-b;
    }else if(op=="X"||op==="*"){
        return a*b;
    }else if(op==="/"){
        return a/b;
    }else if(op==="%"){
        return a%b
    }
}
let num_1 = Number(prompt("Enter the first number"));
let operator = prompt("Enter any operator\n(+,-,*,/,%)");
let num_2 = Number(prompt("Enter the second number"));
let answer = Calculate(num_1,operator,num_2);
output = `<h1>Calculator</h1><p class="fs-4">${num_1} ${operator} ${num_2}  : ${answer}</p>`
document.getElementById("ch-35_question_4").innerHTML = output;

// 5. Write a function that squares its argument.

const Square = (a)=>a**2;
let num = Number(prompt("Enter any number \nto get its square"))
let sq = Square(num)
output = `<h1>Calculator</h1><p class="fs-4">Square of ${num} is :${sq}</p>`
document.getElementById("ch-35_question_5").innerHTML = output;

// 6. Write a function that computes factorial of a number. 

const factorial = (a)=>{
    let result=1
    for(let i=1 ; i<=a ;i++){
        result *=i
    }
    return result
};
let num = Number(prompt("Enter a number to find its factorial"));
let fact = factorial(num)
output = `<h1>Factorial</h1><p class="fs-4">Factorial of  ${num} is :${fact}</p>`
document.getElementById("ch-35_question_6").innerHTML = output;

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

let output
let table = (a,b)=>{
    let result
    output = `<p class="fs-4">Multiplication table of ${num} is: </p>`
    for(let i=1; i<=b ;i++){
        result = i*a;
        output += `<p class="fs-4">${num} x ${i} = ${result}</p>`
    }
};
let num = Number(prompt("Enter a number to find Multiplication table"));
let range = Number(prompt("Enter the range",10))
let tab = table(num,range)
console.log(num,range)
document.getElementById("ch-35_question_7").innerHTML = output;

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() 
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(number) {
        return number * number;
    }
    
    let baseSquare = calculateSquare(base);
    let perpendicularSquare = calculateSquare(perpendicular);
    
    return  Math.sqrt(baseSquare + perpendicularSquare).toFixed(2);
}

let prep = Number(prompt("Length of prependicular"));
let base = Number(prompt("Length of base"))
let hyp = calculateHypotenuse(prep,base)
let output = `<p class="fs-4">Hypotenuse: ${hyp}</p>`
document.getElementById("ch-35_question_8").innerHTML = output;

// 9. Write a function that calculates the area of a rectangle. 
// A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 

const rectangleArea = (width,height)=>{
    return width*height;
}
let width = Number(prompt("width of rectangle"));
let height = Number(prompt("Height of rectangle"))
let area = rectangleArea(width,height)
let output = `<p class="fs-4">Area of rectangle: ${area} units<sup>2<sup></p>`
document.getElementById("ch-35_question_9").innerHTML = output;

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam

const palindrome = (string) => {
    let reverseString = string.split('').reverse().join('');
    let output
    if (string === reverseString) {
        output = `<p class="fs-4">${string} is palindrome</p>`
    } else {
        output = `<p class="fs-4">${string} is not a palindrome</p>`
}
return output
}
let string = prompt("Enter any word").toLowerCase();
output = palindrome(string)
document.getElementById("ch-35_question_10").innerHTML = output;

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox'
const capitalizeWords = (str) => {
    return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
let string  = prompt("Enter any string");
let output= `<p class="fs-4">You entered:  ${string}<br>
Sentence case: ${capitalizeWords(string)}</p>`;
document.getElementById("ch-35_question_11").innerHTML = output;

// 12. Write a JavaScript function that accepts a string as a  
// parameter and find the longest word within the string.   
// EXAMPLE STRING : 'Web Development Tutorial'   
// EXPECTED OUTPUT : 'Development'

const findLongestWord = (str) =>{
    let words = str.split(" ");
    let longest = "";
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}

const string = prompt("Enter a string");
const output = `<p class="fs-4"> ${findLongestWord(string)}</p>`
document.getElementById("ch-35_question_12").innerHTML = output;

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  
// Sample arguments : 'JSResourceS.com', 'o' 

const countLetter = (str, letter)=> {
    let count = 0;
    for (let char of str) {
        if (char === letter) {
            count++;
        }
    }
    
    return count;
}

const string = prompt("Enter any string")
const letter = prompt("Enter a letter")

const output = `<p class="fs-4">The number of occurrences of "${letter}" in "${string}" is : ${countLetter(string,letter)}</p>`
document.getElementById("ch-35_question_13").innerHTML = output;

// 14. The Geometrizer 
// Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area 
// is NN". 
//  
// Circumference of circle    =     2πr 
// Area of circle       =     πr2

// Calculate Circumference 
const calcCircumference = (radius) => {
    return 2 * (Math.PI) * radius
}
// Calculate Area
const calcArea = (radius) => {
    return (Math.PI) * radius ** 2
}

const radius = Number(prompt("Enter the radius of the circle"));
const circumference = calcCircumference(radius).toFixed(2);
const Area = calcArea(radius).toFixed(2);
let output = `
<p class="fs-4">The circumference of this circle is: ${circumference} units</p>
<br>
<p class="fs-4">The area of this circle is: ${Area} units<sup>2</sup></p>
<small>Radius was :- ${radius}</small>
`
document.getElementById("ch-35_question_14").innerHTML = output
*/

//----------------------------------------------------------------------------------------------------------------

/*

 Chapters - 38 to 42 : FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS
 
 // 1.  Write a custom function power ( a, b ), to calculate the value of 
 // a raised to b.
 const power = (a,b) =>a**b
 const num= Number(prompt("Enter the number"));
 const exp = Number(prompt("Enter the power"));
 
 const output = `<p class="fs-4">${num}<sup>${exp}</sup> = ${power(num,exp)}</p>`;
 document.getElementById("ch-38_question_1").innerHTML = output;
 
 // 2. Any year is entered through the keyboard. Write a function to 
 // determine whether the year is a leap year or not. 
 // Leap years ..., 2012, 2016, 2020, ... 

 const leapYear = (year)=>{
    if(year%4==0){
        return `leap`
    }
    else{
        return `not a leap`
}
}
const year = prompt("Enter any year",2020)
const output = `<p class="fs-4">The year ${year} is a ${leapYear(year)} Year</p>`;
document.getElementById("ch-38_question_2").innerHTML = output;

// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions

const calculateS = (a, b, c) => {
    return (a + b + c) / 2;
};


const calculateArea = (a, b, c) => {
    const S = calculateS(a, b, c);
    
    return Math.sqrt(
        S * (S - a) * (S - b) * (S - c)
    );
};

const side_1 = Number(prompt("Enter the length of side of one triangle"));
const side_2 = Number(prompt("Enter the length of side of  second triangle"));
const side_3 = Number(prompt("Enter the length of side of third triangle"));
const area = calculateArea(side_1,side_2,side_3);
const output = `<p class="fs-4">The area of triangle is: ${area}</p>`;
document.getElementById("ch-38_question_3").innerHTML = output;

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

const mainFunction = (subject_1,subject_2,subject_3) => {
    const average = (a,b,c)=> {
        return ((a+b+c)/3).toFixed(2)
    };
    const percentage =(a,b,c) => {
       return  (((a+b+c)/150)*100).toFixed(2)
    };
    const avg = average(subject_1,subject_2,subject_3)
    const per = percentage(subject_1,subject_2,subject_3)

    return `Average: ${avg}<br> Percentage: ${per}%`
}
let sub_1 = Number(prompt("Enter marks of subject-1"));
let sub_2 = Number(prompt("Enter marks of subject-2"));
let sub_3 = Number(prompt("Enter marks of subject-3"));
const output = `<p class = "fs-4">${mainFunction(sub_1,sub_2,sub_3)}</p>`
document.getElementById("ch-38_question_4").innerHTML = output;

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now. 

const string = prompt("Enter any string").trim().toLowerCase()
const ch = prompt("Enter any character to fin its index-no.")
const index = string.indexOf(ch)
if(index==-1){
    output = `<p class = "fs-4">${ch} not found in the string: ${string.toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")} </p>`
}else{
    output = `<p class = "fs-4">Index of first "${ch}" in "${string.toLowerCase()
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ")}" is : ${index} </p>`
}
document.getElementById("ch-38_question_5").innerHTML = output;

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long. 

function removeVowels(sentence) {
    let result = "";
    
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();
        
        if (
            char !== "a" &&
            char !== "e" &&
            char !== "i" &&
            char !== "o" &&
            char !== "u"
        ) {
            result += sentence[i];
        }
    }
    
    return result;
}

console.log(removeVowels("JavaScript is easy"));


// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence.

function countVowelPairs(text) {
    let count = 0;
    
    for (let i = 0; i < text.length - 1; i++) {
        let pair = text[i].toLowerCase() + text[i + 1].toLowerCase();
        
        switch (pair) {
            case "aa":
                case "ae":
                    case "ai":
                        case "ao":
                            case "au":
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                break;
        }
    }

    return count;
}

console.log(countVowelPairs("Pleases read this application and give me gratuity"))

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters. 


let distance = Number(prompt("Enter distance between two cities in kilometers:"));

function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.08;
}

function toCentimeters(km) {
    return km * 100000;
}

console.log("Distance in meters:", toMeters(distance));
console.log("Distance in feet:", toFeet(distance));
console.log("Distance in inches:", toInches(distance));
console.log("Distance in centimeters:", toCentimeters(distance));

// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.

let hours = Number(prompt("Enter total hours worked:"));

function calculateOvertime(hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        return overtimeHours * 12;
    } else {
        return 0;
    }
}

console.log("Overtime Pay: Rs.", calculateOvertime(hours));

// 10. A cashier has currency notes of denominations 10, 50 and 100.
//  If the amount to be withdrawn is input through the keyboard in hundreds, 
// find the total number of currency notes of each denomination the cashier
//  will have to give to the withdrawer.

function currencyNotes(amount) {
    let notes100 = Math.floor(amount / 100);
    amount %= 100;

    let notes50 = Math.floor(amount / 50);
    amount %= 50;

    let notes10 = Math.floor(amount / 10);

    return `
        <p class="fs-4">100 notes = ${notes100}</p>
        <p class="fs-4">50 notes = ${notes50}</p>
        <p class="fs-4">10 notes = ${notes10}</p>
    `;
}

const amount = Number(prompt("Enter amount to withdraw:"));
document.getElementById("ch-38_question_10").innerHTML = currencyNotes(amount);
*/

//----------------------------------------------------------------------------------------------------------------

/*
 Chapters - 42 to 48 : EVENTS

 // 1.  Show an alert box on click on a link.
 const btn = document.querySelector(".btn").addEventListener('click',()=>{
    alert("You clicked the button")
})
// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user. 
  
const sam = document.querySelector(".sam").addEventListener('click',()=>{
    alert("Thanx for buying Samsung ")
});
const inf = document.querySelector(".inf").addEventListener('click',()=>{
    alert("Thanx for buying INFINIX ")
});
const ip = document.querySelector(".ip").addEventListener('click',()=>{
    alert("Thanx for buying IPHONE ")
});
const op = document.querySelector(".op").addEventListener('click',()=>{
    alert("Thanx for buying OPPO ")
});

// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted. 

const deleteButtons = document.querySelectorAll('#delete');

deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const row = button.parentNode;
        row.remove();
    });
});

// 4. Display an image in browser. Change the picture on mouseover and set the 
// first picture on mouseout. 

const flipImage = () => {
    const image = document.querySelector(".pic");


    const phoneImage = document.getElementById("phoneImage");

    phoneImage.addEventListener("mouseover", () => {
        phoneImage.src = "./images/samsung.avif";
    });

    phoneImage.addEventListener("mouseout", () => {
        phoneImage.src = "./images/infinix.jpg";
    });
};

flipImage();

// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser

const counter = () => {
    
    let count = 0;
    
    const getCount = document.querySelector(".count");
    const increaseBtn = document.querySelector(".increase");
    const decreaseBtn = document.querySelector(".decrease");
    
    increaseBtn.addEventListener("click", () => {
        count++;
        getCount.innerHTML = count;
    });
    
    decreaseBtn.addEventListener("click", () => {
        count--;
        getCount.innerHTML = count;
    });
};

counter();
*/

//----------------------------------------------------------------------------------------------------------------

/*
 Chapters - 42 to 48 : EVENTS

 */

// 1. Create a signup form and display form data in your web 
// page on submission. 

  const form = document.getElementById("signupForm");


        form.addEventListener("submit", function (event) {
             event.preventDefault(); // stop page reload
             const name = document.getElementById("name").value;
             const email = document.getElementById("email").value;
             const password = document.getElementById("password").value;
                document.getElementById("output").innerHTML = `