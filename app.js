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
*/
// 1.  Write a program that takes two user inputs for first and  last name using prompt and merge them in a new variable  titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = firstName+lastName;
let output = `<p class = "fs-4 ">${multiples.join(", ")}</p>`;
document.getElementById("ch-21_question_10").innerHTML = output;
