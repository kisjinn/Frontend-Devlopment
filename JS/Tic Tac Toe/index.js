//Accessing every html element
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO = true;

//storing winning pattrens
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let count=0;

boxes.forEach((bx)=>{
   bx.addEventListener("click", ()=>{
    //if Player O turn
    if(turnO){
        bx.innerHTML = "O";
        turnO = false;
    }
    else{
        bx.innerHTML = "X";
        turnO = true;
    }
   count++;
   bx.disabled = true;  //so that once any player click that btn, it shouldnt pressed again
   checkWinner();

   //when there is a draw
   if(msgCont.classList.contains("hide") && count==9){
    showDraw();
   }
   }) 
}
);

const checkWinner = () =>{
    for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val!= "" && pos3Val!=""){
       if(pos1Val == pos2Val && pos2Val==pos3Val){
          showWinner(pos1Val);
        }
    }
    }
}

const showWinner= (winner)=>{
    disabledBoxes();
    msg.innerHTML= "Winner is " + winner;
    msgCont.classList.remove("hide");
}


const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
   
}

//Resetting game i.e New Game
const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
   
}


const resetGame = ()=>{
    enabledBoxes();
    turnO = true;
    msgCont.classList.add("hide");
    count=0;
    
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


const showDraw= ()=>{
    disabledBoxes();
    msg.innerHTML= "Game is Draw, Restart";
    msgCont.classList.remove("hide");
}