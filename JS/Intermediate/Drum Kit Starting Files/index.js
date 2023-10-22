var noOfDrunButtons = document.querySelectorAll(".drum").length; //as we have 7 buttons
for(var i=0;i<noOfDrunButtons;i++){

    //Adding anonymous function fo eventListener so that when we click on button, function will get called
    //function() is anonymous as it is without the function name
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    alert("Hello");
    });

}



