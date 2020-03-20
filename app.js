const player = (name, score) => {
    return {name, score, totalScore}
}
activePlayer = 1;
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
    const setMark = () =>{
        boardContainer.addEventListener("click", function(e){
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
        });
        
    };

    //Clear board function
    const clearBoard = () => {
        board = ["","","","","","","","",""];
        renderBoard();
    }

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
        }
        console.log(winner);

    }





return {renderBoard, setMark, clearBoard, checkWinner};
})();


gameBoard.renderBoard();
gameBoard.setMark();

