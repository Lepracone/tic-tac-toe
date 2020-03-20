const player = (name, score, totalScore) => {
    return {name, score, totalScore}
}
activePlayer = 2;
const gameBoard = (() =>{
    let board = ["X","O","","","X","","X","",""];
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
                console.log(board)             
            }else if(value === "" && activePlayer === 2){
                board[position] = "O";
            };
        renderBoard();
        });
        
    };

    const clearBoard = () => {
        board = ["","","","","","","","",""];
        renderBoard();
    }




return {renderBoard, setMark, clearBoard};
})();


gameBoard.renderBoard();
gameBoard.setMark();

