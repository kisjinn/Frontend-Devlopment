let dv=document.querySelector("div");
console.log(dv);

let att=dv.getAttribute("id");  //getting value of id (i.e. value of attribute)
console.log(att); // This will log the current value of the "id" attribute


// // Now, if you want to set a new value for the "id" attribute, you can do this:
// dv.setAttribute("id", "anotherBox");
// console.log(dv.getAttribute("id")); // After setting the attribute, you can check the new value:

//changing style in js
let div=document.querySelector("div");
console.log(div);  //div.style return style 
div.style.backgroundColor="green";

//div.style.visibility="hidden";

//*******Inserting new elemnt ******
let divv=document.querySelector("div");
let newBtn=document.createElement("button"); //creating new button
newBtn.innerText="Click Me"
divv.append(newBtn); //adding button at end of div inside div
// divv.prepend(newBtn);//adding button at start of div inside div
// divv.before(newBtn); //add button before div 
//divv.after(newBtn); //add button after div 

newBtn.remove(); //removing

//Practice
//Create new element and give it a name "click Me!" , bg color red and text color white.
//Insert button as first elemnt inside body
let anotherBtn = document.createElement("button");
anotherBtn.innerText= "click Me!"
anotherBtn.style.backgroundColor="red";
anotherBtn.style.color= "white";
document.querySelector("body").prepend(anotherBtn);

//2nd question
let addClass=document.querySelector("p");
//addClass.setAttribute("class","newClass"); //But newClass completely overwrite the old one but we want both at the same time
addClass.classList.add("newClass"); //it will add new class and also parallely old one remain as it it i.e. paragraph will have both class






