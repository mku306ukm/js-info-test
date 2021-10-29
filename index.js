//======1======

// function mytime() {
//   console.log("hi");

//   let today = new Date();
//   console.log("Current time is : " + today);

//   let day = today.getDay();
//   console.log("Current day : " + day);

//   let daylist = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   console.log("Today is : " + daylist[day] + ".");

//   let month = today.getMonth();
//   console.log("Current month : " + month + ".");

//   let monthlist = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   console.log("Today month is : " + monthlist[month] + ".");

//   let date = today.getDate();
//   console.log("Current date : " + date);

//   let year = today.getUTCFullYear();
//   console.log("Current year : " + year);

//   let hour = today.getHours();
//   console.log("Current hour : " + hour);

//   let minute = today.getMinutes();
//   console.log("Current minute : " + minute);

//   let second = today.getSeconds();
//   console.log("Current seconds : " + second);

//   let prepand = hour >= 12 ? "PM" : "AM";
//   hour = hour >= 12 ? hour - 12 : hour;
//   if (hour === 0 && prepand === " PM ") {
//     if (minute === 0 && second === 0) {
//       hour = 12;
//       prepand = "Noon";
//     } else {
//       hour = 12;
//       prepand = "PM";
//     }
//   }
//   if (hour === 0 && prepand === " AM ") {
//     if (minute === 0 && second === 0) {
//       hour = 12;
//       prepand = "Midnight";
//     } else {
//       hour = 12;
//       prepand = "AM";
//     }
//   }
//   console.log("Current Time : " + hour + prepand + ":" + minute + ":" + second);

//   document.write("Today is : " + daylist[day] + "." + "<br/>");
//   document.write(
//     "Current Time : " + hour + prepand + ":" + minute + ":" + second
//   );
// }
// mytime();

//======2======
/* function print_current_page() {
  window.print();
}
document.getElementById("both").style.color = "red";
document.getElementById("both").style.marginLeft = "500px";
document.getElementById("both").style.marginTop = "200px";

document.getElementById("click").style.color = "red";
document.getElementById("click").style.marginLeft = "70px";
*/

//======3======
/*
let today = new Date();
console.log(today);

let dd = today.getDate();
console.log(dd);

let mm = today.getMonth() + 1;
console.log(mm);

let yyyy = today.getUTCFullYear();
console.log(yyyy);

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = mm + "-" + dd + "-" + yyyy;
console.log(today);

today = mm + "/" + dd + "/" + yyyy;
console.log(today);

today = dd + "-" + mm + "-" + yyyy;
console.log(today);

today = dd + "/" + mm + "/" + yyyy;
console.log(today);
*/

//======4======
/*
let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = (side1 + side2 + side3) / 2;
let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log("Area of a triangle :" + area);
document.write("Area of a triangle :" + area);
*/

//=====5=====

//HTML
/* <body onload="animate_string('target')">
<pre id="target">Umesh Kumar Mehta </pre>
*/
/*
function animate_string(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // assuming no other children
  var text = textNode.data;

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}
*/
//=====6======
/*
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
*/

//======7======
//A Program to find 1st January is being a Sunday between 2014 and 2050.
/*
console.log("-----------");
for (let year = 2014; year <= 2050; year++) {
  let d = new Date(year, 0, 1); //new Date(year, month, day, hours, minutes, seconds, milliseconds)

  if (d.getDay() === 0) console.log(d + year);
}
console.log("-----------");
*/
//=======8=======
//get a random integer from 1 to 10 inclusive

// const num = Math.ceil(Math.random() * 10);
// console.log(num);

// const gnum = prompt("Guess the number between 1 and 10 inclusive ");
// if (gnum == num) console.log("Matched");
// else console.log("Not matched,the number was " + num);

//9.
// Write a JavaScript program to calculate days left until next Christmas.

// today = new Date();
// console.log(today);

// var dipawali = new Date(today.getFullYear(), 10, 4);
// console.log(dipawali);

// if (today.getMonth() == 10 && today.getDate() > 4) {
//   dipawali.setFullYear(dipawali.getFullYear() + 1);
// }
// var one_day = 1000 * 60 * 60 * 24;
// console.log(
//   Math.ceil((dipawali.getTime() - today.getTime()) / one_day) +
//     " days left until Dipawali!"
// );

//======10======
function multiplyBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}
function additionBy() {
  num1 = document.getElementById("firstNumber").value;
  console.log(typeof num1);
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}
function substractBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 - num2;
}
function remainderBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 % num2;
}

//$$$$$=====11=======$$$$$$$
