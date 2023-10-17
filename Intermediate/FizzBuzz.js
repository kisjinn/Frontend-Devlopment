var i=1;
while(i<=100){
    console.log(fizzBuzz(i));
    i++;
}
function fizzBuzz(ele){
    if(ele%3==0 && ele%5==0){
        return "FizzBuzz";
    }
    else if(ele%3==0){
        return "Fizz";
    }
    else if(ele%5==0){
        return "Buzz";
    }
    else{
        return ele;
    }
}