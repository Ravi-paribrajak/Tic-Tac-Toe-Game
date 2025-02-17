const boxes = document.querySelectorAll(".box-btn");
const reset = document.querySelector(".reset_button");
const message = document.querySelector(".message");

let count = 0;
let turnO = true;
let colorO = true;

boxes.forEach((box) => {
    box.addEventListener('click', () =>{
        console.log("Boxes are clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "green"
            colorO = false;
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red"
            colorO = true;
            turnO = true;
        }
        count++;
        box.disabled = true;
        
        // calling fuction to check winner
        let isWinner = checkWinner();

        // Checking condition of draw
        if(count === 9 && !isWinner){
            console.log("Match is a draw");
            gameDraw();
        }
        box.disabled = true;
    })
    
});
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    enableBoxes();
    count = 0;
    turnO = true;
    colorO = true;
    message.innerText = "Tic Tac Toe Game by- Ravishankar";
    // message.classList.add("hide");
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const gameDraw = () =>{
    message.innerText = "";
    message.innerText = `Game was a draw !`;
    message.classList.remove("hide");
    disableBoxes();
};

reset.addEventListener('click', (btn)=>{
    resetGame();
});

const showWinner = (winner) =>{
    message.innerText = "";
    message.innerText = `Congratulations, Winner is ${winner} !!!`;
    message.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let x of winningPattern){
        let val1 = boxes[x[0]].innerText;
        let val2 = boxes[x[1]].innerText;
        let val3 = boxes[x[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log(`The winner is ${val1}`);
                showWinner(val1);
                return true;
            }
        }
    }
};