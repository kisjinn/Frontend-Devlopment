//functions in JS
function Myfunction(){
    console.log("Sakshi Jinnewar");
}

Myfunction(); //calling above function i.e. invoking function

//function helps to minimize redundancy

//Function with parameter
function printing(msg){ //msg is a parameter
    console.log(msg);
}
 printing("My name is SJ"); //passing string is argument

//Arrow Function
let a=10, b=4;
let sum= (a,b)=>{
    return a+b;
}
console.log(sum(a,b)); //calling arraow function using sum variable


//create a function which takes string as an argument and return no of vowels in it
//1. Using function keyword
function countVowels(str){
    let length=str.length;
    let count=0;
    for(let i=0;i<length;i++){
        let c=str.charAt(i);
        
        if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'||
           c=='A' || c=='E' || c=='I' || c=='O' || c=='U'){
              count++;
           }
    }
    return count;
}

console.log(countVowels("Sakshi Jinnewar"));

//2. Using arrow function
let countVowelsArrow = (str)=>{
    let length=str.length;
    let count=0;
    for(let i=0;i<length;i++){
        let c=str.charAt(i);
        
        if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'||
           c=='A' || c=='E' || c=='I' || c=='O' || c=='U'){
              count++;
           }
    }
    return count;
}
console.log(countVowelsArrow("ApnaCollege"));

//For each Method
//A method is fuction associated with a object  e.g toUpperCase is a method associated with string
//arr.forEach(callBackFunction)  where callBackFunction is a function passes as an parameter to another function
//we can print array element as well as its index or whole array using forEachLoop
let ar=[1,2,3,4,5,6,7];
ar.forEach(function printing(val){  //for each taking an array element and passed it as a parameter to function
console.log(val);
});

//Higher Order Function/Method: Functions who take other function as a parameter or return another function as a output
//e.g ForEach method

//using forEach print square of each array elemnet
let arr=[1,2,3,4,5,6,7];
arr.forEach(function printingSquares(val){  //for each taking an array element and passed it as a parameter to function
console.log(val*val);
});

//Map is as same as forEach 
//The only differnce is map return array
//so when we need to create a new array from existing array using some operation sthen we use Map

//Given array of amrks of students, filter student with marks > 90
let marks=[46,98,45,98,90,92];
let newArr= marks.filter(function(val){
return val>90;
})

console.log(newArr); //return array with marks>90

//create array of numbers n and then calculate its product using reduce
let aa=[1,2,3,4,5,6,7,8];
let finalProd= aa.reduce(function(prev, curr){
    return prev*curr;  //Finally, will return a single number which represents product of all array elemnst
})
console.log(finalProd);










