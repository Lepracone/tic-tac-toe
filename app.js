const player = (name, score, totalScore) => {
    return {name, score, totalScore}
}

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
            console.log(position);
            // let value = e.target.textContent;
            // if(value === "" && activePlayer === 1){
            //     board[               
            // }else if(value === "" && activePlayer === 2){
            //     value.textContent = ""
            // };
        });
    };




return {renderBoard, setMark};
})();


gameBoard.renderBoard();
gameBoard.setMark();

