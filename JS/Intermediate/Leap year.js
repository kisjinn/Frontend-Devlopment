var year=2014;
return isLeap(year);
function isLeap(year) {
 //Write your code here. 
    if((year%4==0 && year%100!=0) || (year%400==0)){
        console.log("Leap year .");
    }
    else{
        console.log("Not leap year .");
    }
}