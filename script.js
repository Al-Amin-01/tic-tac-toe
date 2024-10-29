const patterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let boxes=document.querySelectorAll(".box");
let winner=document.querySelector("#winner");
let msgContainer=document.querySelector(".msg-container");
let newGame=document.querySelector("#new-btn");
let resetGame=document.querySelector("#reset-btn");
let turn=true;
let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.classList.add("green");
            box.classList.remove("red");
            
            box.innerText="o";
            turn=false;
        }
        else{
            box.classList.add("red");
            box.classList.remove("green");
            box.innerText="x";
            turn=true;
        }
        count++;
        box.disabled=true;
        let isWin=checkWinner();

        if(count===9 && !isWin){
            console.log('draw');
        }

    })
})

const checkWinner=()=>{
    for(let pattern of patterns){
        let cell1=boxes[pattern[0]].innerText;
        let cell2=boxes[pattern[1]].innerText;
        let cell3=boxes[pattern[2]].innerText;

        if(cell1!="" && cell2!="" && cell3!=""){
            if(cell1===cell2 && cell2===cell3){
                msgContainer.classList.remove("hide");
                if(cell1==="o"){
                    winner.innerText="player 1 won";
                }
                else{
                    winner.innerText="player 2 won";
                }
              
                for(let box of boxes){
                    box.disabled=true;
                }
                return true;
            }
        }
    }

}
const enableGame=()=>{
    msgContainer.classList.add("hide");
    turn=true;
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
    
}

newGame.addEventListener("click",enableGame);
resetGame.addEventListener("click",enableGame);