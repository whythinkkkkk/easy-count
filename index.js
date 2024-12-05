//counter program
const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");
const countlabel=document.getElementById("countlabel");
let count=0;

decreaseBtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}

resetBtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}

increaseBtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}

/* convert datatype (string, number, boolean)
let x="0"; //pizza
let y="0";
let z="0";
x=Number(x);
y=String(x);
z=Boolean(x);

console.log(x, typeof x); //Nan 'number' //0 'number'
console.log(y, typeof y);//pizza string //0 string
console.log(z, typeof z);//true 'boolean' //false 'boolean'

let age = window.prompt("How old are you?");
age=Number(age);//declare as number data type
age+=1;
console.log(age, typeof age);
*/
/*pro way for input
let username;

document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
}

<html>
    <h1 id="h1">Welcome</h1>

    <label>Userneme:</label>
    <input id="myText"><br><br>
    <button id="mySubmit">submit</button>

    <p id="p1"></p>
*/
/*easy way for input
let username;

username=window.prompt("What is your user name?");

console.log(username);
document.getElementById("p1").textContent=username;
*/
/*calculations
let students = 30;
students+=1;
students-+1;
students*=2;
students/=2;
students**=2; //power of 2
students%=2;
students++;

//console.log(students);

let result=1+2*3+4**2;
console.log(result);
*/
/*display

console.log("Hello World");
console.log("I like pizza");

//pop up window
window.alert("This is an alert!");
window.alert("I like pizza!");

document.getElementById("myH1").textContent =  "Hello";
document.getElementById("myP").textContent = "I like pizza!";
*/
/*display
let fullName="Bro Code";
let age=25;
let isStudent=true;

console.log(fullName);
console.log(`Age: ${age}`);
console.log(`Enrolled: ${isStudent}`);

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Age: ${age}`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
*/


