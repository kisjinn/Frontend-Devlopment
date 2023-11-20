/*FOR loop*/
//Show sum from 1 to 100
let sum=0;
for(let i=1;i<=100;i++){
sum += i;
console.log('sum is '+ sum);
}

/*WHILE loop*/
let count=1;
while(count<=5){
    console.log(count);
    count++;
}

/*Do WHILE LOOP*/
let i=7;
do{
    console.log(i);
    i++;
}
while(i<=6);

/*for-of loop*/
let s="Sakshi Jinnewar";
for(let j of s){
    console.log(j);
}

/*for in loop => use to iterate over for in */
let profile={
name: "Sakshi J",
Grade: 8.5,
graduationYear:21
};

for(let key in profile){
    console.log(key +" : "+ profile[key]);
}

//printing all even numbers from 0 to 100
for(let i=0;i<=100;i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//create a game where we are starting with any random game number. As user to eep guessing number until user enters correct value
let randomNum = Math.round(Math.random()*6);
console.log(randomNum);
let userNum=0;
while(userNum!=randomNum){
    userNum= prompt("Enter any number between 0 to 5");
}
console.log("You enetered right number");


