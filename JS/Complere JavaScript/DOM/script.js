//window object is browsers onbject and whatever inbuilt statements, functions , methods we use in Javascript are de fined inside window
//e.g window.alert()
//But, we dont write window. usually

//******************************Document Object Module***************************************************

//What is DOM
//ans: All html code gets converted into an object in js which is known as document. Document is present as sub-
//object in window object. Foe printing ovject, we use console.dir(). When page is loaded, dom get created
//     window
//        |
//     document
//        |
//       html 
//       /   \
//    head   body
//So, in short, we use dom to access html in javascript 

//DOM Manipulation
let idd= document.getElementById("first");  //accessing a id
console.dir(idd);
let arr=document.getElementsByClassName("heading"); //accessing more than one elemnt so using elements in getElementsById
console.dir(arr);//return html collections
let para=document.getElementsByTagName("p"); //accessing tag
console.dir(para);

//when we are trying to access id whcih is not present in html, it return  null
//when we are trying to access class whcih is not present in html, it return emplty html collection of length 0

//To access id or clasd or tag, we can simply use queryselector
let elements= document.querySelectorAll(".heading");  //it returns nodelist
console.dir(elements);  //return isngle elemnt with class heading


//Properies
//suppose we store dom result in a variable x then
//x.tagName => return tag for element node e.g. elements.tagName
//x.innerText => return only text content
//x.innerHTML => return innre html content as well
//x.textContent => return text of hidden content as well

//Practice
//create h2 and append another string using javascript
let hea=document.querySelector("h2");
console.log(hea);   
hea.innerText= hea.innerText + " to learn Java";

//create 3 div with common classname as div, access them and add unique text to them
let d=document.querySelectorAll(".box");
for(let i=0;i<d.length;i++){
d[i].innerText= d[i].innerText+" " +i;
}







