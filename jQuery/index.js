$("button").click(function(){
    $("h1").css("color","purple");
  });
  

//whenevr we press any key on keyboard, key will get shown inside h1
$(document).keypress(function(event){
    $("h1").text(event.key);
  });