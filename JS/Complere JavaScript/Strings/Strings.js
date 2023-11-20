//Define
let str="Sakshi Jinnewar";
//access character
console.log(str[4]);

//Template Literals => Special type of string => way to embed expression in string
let tempLiterals=`This is a template literal`;


//Difference between string and Template Literals
//String interpolation: create string by doing substituition of placeholder
let obj={
    item:"pencil",
    price:15
}

let outputString= "The price of "+ obj.item + " is " + obj.price;
console.log(outputString);

let outputLiterals = `The price of  ${obj.item} is ${obj.price}`;
console.log(outputLiterals);


//escape character \n
console.log("Sakshi\nJinnewar");


//String Methods
let st="Sakshi J  ";
let newst=st.toUpperCase();
console.log(newst);
console.log(newst.trim());
console.log(str.slice(0,3)); //3 is exclusive
console.log(str.replace('s', 'K'));

//Ask user for their full name and generate username for them
let userName= prompt("Enter your Full Name");
console.log("Your username is " + '@' + userName+ userName.length);
