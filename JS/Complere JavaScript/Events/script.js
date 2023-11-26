// let div = document.querySelector("#another");
// div.onmouseover = ()=>{
// alert("you hovered over me");
// };

// //If we handle any event 2 times, inline as well as in external js then Externak one will dominate inline handling
// //If we handle same event 2 times in external js then the latest handling will overwrite the first one

// //we can print diffrent information about event using event object. E.g. =>
// let div = document.querySelector("#another");
// div.onmouseover = (e)=>{
// alert(e.type);

// };


// //**********************************EventListener****************************************** */
// //callback function also known as Handler
// let btn= document.querySelector("#second").addEventListener("click", ()=>{
//     console.log("button was clicked");
// })

//Change the mode of screen
//we can do this using following 2 ways
//First way
// let tog = document.querySelector(".mode");
// let currMode="light";
// tog.addEventListener("click",()=>{
// if(currMode=="light"){
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor="black";
// }
// else{
//     currMode="light";
//     document.querySelector("body").style.backgroundColor="white";
// }
// });

//second way
let mde= document.querySelector(".mode");
let body= document.querySelector("body");
let currMode="light";
mde.addEventListener("click",()=>{
if(currMode==="light"){
    currMode="dark"
    body.classList.add("dark");  //adding dark class from css file
    body.classList.remove("light");  //removing light class as we have to add dark class
}
else{
    currMode="light"
    body.classList.add("light"); //adding light class from css file
    body.classList.remove("dark");
}
});
    