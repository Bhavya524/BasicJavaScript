/*
ways to print in javascript
console log
*/
console.log("hello world console log", 4 + 54, "try");
//console warning print
console.warn("This is warning to be print");
//console error print
console.error("this is error to be print");

//alert message
// alert('this is error message')

//declare the variable
var name = "name",
  age;

//objects
var obj = {
  first: 1,
  second: "second",
  third: 3.33,
  forth: true,
};
console.log(obj);
console.log(obj.first);

//array
var arr = [2, "d", true, 4, 3.45];
console.log("array 1- " + arr);
// arr.push(6)
// arr.pop()
// arr.shift()
console.log("array 2 - " + arr);
console.log("get array elements- " + arr[1]);

/*
create the function(method) with parameters
used to run bunch of code by call 
*/
function test(name, age) {
  console.log("this function is created by" + name + ", and his age is " + age);
}
//call the function with argument
test(" bhavya", 20);

//Conditions in javascript
var age = 12;
if (age < 8) {
  console.log("Kid");
} else if (age < 40) {
  console.log("Young");
} else {
  console.log("Old");
}

var arra = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(arra);
//for loop
for (var i = 0; i < arra.length; i++) {
  console.log(arra[i]);
}

//forEach loop
arra.forEach(function (elements) {
  console.log(elements);
});

//while loop
var x = 5;
while (x > 0) {
  console.log(x);
  x--;
}

//String methods in javascript
var str = "string";
console.log("str length- " + str.length);
console.log("str char at index 1 is-" + str.charAt(1));
console.log("str sliced at index 2- " + str.slice(1, 3));
console.log("str in uppercase- " + str.toUpperCase());
console.log("str index of- " + str.indexOf("g"));

//Date
let mydate = new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getTimezoneOffset());

//DOM manupulation
let dc = document.getElementById("click");
console.log(dc.innerText);
let cl = document.getElementsByClassName("container");
console.log(cl);

/*
    Event in javascript
*/

function clicked() {
  console.log("click me is clicked");
}

// firstContainer.addEventListener('click',function(){
//     console.log('cliagrg')
// })
let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
console.log(prevHTML);
//off click set old HTML
firstContainer.addEventListener("mouseup", function () {
  document.querySelectorAll(".container")[1].innerHTML = prevHTML;
  console.log("mouse on ");
});
//on click
firstContainer.addEventListener("mousedown", function () {
  document.querySelectorAll(".container")[1].innerHTML = "<b> mousedown </b>";
  console.log("mouse out");
});
/*
    Arrow Functions
*/
//normal
function summ(a, b) {
  return a + b;
}
//ARROW
arrowfunc = (a, b) => {
  return a + b;
};

/*
    setTimeOut and setInteval
*/
timer = () => {
  console.log("time run after 3 secs");
};
setTimeout(timer, 3000);

// setInterval(timer, 3000);
