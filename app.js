//Initial Declarations
activePlayer = 1;
let messageBoard = document.getElementById("messageBoard");

const player = (name) => {
    let score = 0;
    return {name, score}
}

//Buttons Event Listener
let newGame = document.getElementById("newGame");
let playerOne;
let playerTwo;
let onHold = true;

newGame.addEventListener("click", function(){
    p1name = document.getElementById("input1").value;
    playerOne = player(p1name);
    p2name = document.getElementById("input2").value;
    playerTwo = player(p2name);
    renderPlayerNames();
    onHold = false;
    gameBoard.clearBoard();
    playerOne.score = 0;
    playerTwo.score = 0;
    gameBoard.updateScoreBoard();
    activePlayer = Math.floor(Math.random() * 2) + 1; 
    console.log(activePlayer);
    if(activePlayer === 1){
        messageBoard.textContent = playerOne.name + ", your turn!"
    }else{
        messageBoard.textContent = playerTwo.name + ", your turn!" 
    }
});

const renderPlayerNames = () => {
    let p1NameText = document.getElementById("p1NameText");
    let p2NameText = document.getElementById("p2NameText");
    let scoreContainer = document.getElementById("scoreContainer");
    p1NameText.textContent = playerOne.name + ":  ";
    p2NameText.textContent = playerTwo.name + ":  ";
    scoreContainer.classList.remove("invisible");
}


const gameBoard = (() =>{
    let board = ["","","","","","","","",""];
    let sqr = document.getElementsByClassName("sqr");
    let boardContainer = document.getElementById("boardContainer");
    
    
    //Function that reads the values from the board array and renders the squares
    const renderBoard = () => {
        let i = 0;
        board.forEach(function(element){ 
            sqr[i].innerHTML = element;
            i++
        });
    }

    //Event Listener
    const setMark = () => {
        boardContainer.addEventListener("click", function(e){
            if(!onHold === true){
                let position = e.target.id;
                let value = e.target.textContent;
                if(value === "" && activePlayer === 1){
                    board[position] = "X";  
                    activePlayer = 2;        
                }else if(value === "" && activePlayer === 2){
                    board[position] = "O";
                    activePlayer = 1;
                };
            renderBoard();
            checkWinner();
            }
        })
        
        
    };
    

    //Clear board function
    const clearBoard = () => {
        board = ["","","","","","","","",""];
        renderBoard();
    };

    //Check Winner function

    const checkWinner = () => {
        let cB = [];
        let i = 0;
        let winner = "";
        board.forEach(function(element){
            if(element === "X"){
                cB[i] = 1;
            }else if(element === "O"){
                cB[i] = 2;
            }else{
                cB[i] = 0;
            }
            i++;
        })
        
        if((cB[0]*cB[1]*cB[2] === 1) || (cB[0]*cB[1]*cB[2] === 8)){
            winner = board[0];
        }else if((cB[3]*cB[4]*cB[5] === 1) || (cB[3]*cB[4]*cB[5] === 8)){
            winner = board[3];
        }else if((cB[6]*cB[7]*cB[8] === 1) || (cB[6]*cB[7]*cB[8] === 8)){
            winner = board[6];
        }else if((cB[0]*cB[3]*cB[6] === 1) || (cB[0]*cB[3]*cB[6] === 8)){
            winner = board[0];
        }else if((cB[1]*cB[4]*cB[7] === 1) || (cB[1]*cB[4]*cB[7] === 8)){
            winner = board[1];
        }else if((cB[2]*cB[5]*cB[8] === 1) || (cB[2]*cB[5]*cB[8] === 8)){
            winner = board[2];
        }else if((cB[0]*cB[4]*cB[8] === 1) || (cB[0]*cB[4]*cB[8] === 8)){
            winner = board[0];
        }else if((cB[2]*cB[4]*cB[6] === 1) || (cB[2]*cB[4]*cB[6] === 8)){
            winner = board[2];    
        }else if(cB[0] != "" && cB[0] != "" && cB[1] != "" && cB[2] != "" && 
                 cB[3] != "" && cB[4] != "" && cB[5] != "" && cB[6] != "" && cB[7] != "" && cB[8] != ""){
            winner = "Tie";
            messageBoard.textContent ="It's a tie!";
        }
        
        if(winner != ""){
            onHold = true;
            scoreWinner(winner);
        }

    }

    const scoreWinner = (winner) => {
        if(winner === "X"){
            playerOne.score++;
            activePlayer = 2;
            messageBoard.textContent = playerOne.name + " wins!";
        }else if(winner === "O"){
            playerTwo.score++;
            activePlayer = 1;
            messageBoard.textContent = playerTwo.name + " wins!";
        }
        updateScoreBoard();
        nextRound();
    }

    const updateScoreBoard = () => {
        let p1ScoreBoard = document.getElementById("p1Score");
        let p2ScoreBoard = document.getElementById("p2Score");

        p1ScoreBoard.textContent = playerOne.score;
        p2ScoreBoard.textContent = playerTwo.score;
    }

    const nextRound = () => {
        let nextRound = document.getElementById("nextRound");
        nextRound.classList.remove("invisible");
        nextRound.addEventListener("click", function(){
            clearBoard();
            onHold = false;
            nextRound.classList.add("invisible");
            if(activePlayer === 1){
                messageBoard.textContent = playerOne.name + ", your turn!"
            }else{
                messageBoard.textContent = playerTwo.name + ", your turn!" 
            }
        })
       
    }





return {renderBoard, setMark, clearBoard, checkWinner, onHold, updateScoreBoard};
})();


gameBoard.renderBoard();
gameBoard.setMark();

