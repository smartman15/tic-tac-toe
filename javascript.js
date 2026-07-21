// Gameboard object will contain
const gameboard = (() => {
    // number of rows
    const rows = 3;
    // number of columns
    const cols = 3;
    // gameboard array
    const board = [];

    // loop row times
    for(let i = 0; i < rows; i++){
        // insert array into index i
        board[i] = [];
        // for loop column times
        for(let j = 0; j < cols; j++){
            // push cell into array index i
            board[i].push(Cell());
        }
            
    }
        

    // get gameboard function
    const getBoard = () => board;

    // putSpot function for player to put their spot in gameboard
    // pass row, column, player as parameters
    const putSpot = (row, column, player) => {
        // if the spot on row and column is empty
        if(board[row][column] === 0){
            // place player number on row and column
            board[row][column] = player;
        }
            
        // else 
        else{
            // print invalid row and column
            console.log("invalid row and column");
        } 
    }

            
    // print board function
    const printBoard = () => {
        // create boardWithCells variable
        const boardWithCells = board.map((row) => row.map((cell) => cell.getValue()));
        // perform map on board, pass row as parameter
        // for each element in the row, get the value of the cell
        // boardWithCells now contains an array containing the cells

        // print boardWithCells
        console.log(boardWithCells);
    };
        
    
    // return getBoard, printBoard, putSpot functions
    return {getBoard, printBoard, putSpot};

})();
    


// Cell object
function Cell(){
    // value variable to contain the value of player:
    // 0 means its empty
    // player 1 = 1
    // player 2 = 2
    const token = 0;

    // get value of cell function
    const getValue = () => token;
    // set value of cell with player number function
    const setValue = (player) => {
        token = player;
    }

    // return get and set functions
    return {getValue, setValue};
}
   


// Player object
function Player(){
    // number variable (to put into cells later)
    let number;
    let name;

    // get name function
    const getName = () => name;
    // set name function
    const setName = (playerName) => name = playerName;

    
    // get number function
    const getNumber = () => number;
    // set number function
    const setNumber = (num) => {
        number = num;
    }

    return {getName, setName, getNumber, setNumber};
}
    


// GameController object
const gameController = (() => {
    // create player 1 and player 2 objects
    const player1 = Player();
    player1.setName("player 1");
    player1.setNumber(1);

    const player2 = Player();
    player2.setName("player 2");
    player2.setNumber(2);
    // create gameboard object

    // create activePlayer variable to keep track of whose turn it is
    activePlayer = player1;

    // create switchPlayer function to take turns 
    const switchPlayer = () => {
        // if activePlayer is player 1
        if(activePlayer === player1) activePlayer = player2;
            // set activePlayer to player 2
        
        // else if activePlayer is player 2
        else if(activePlayer === player2) activePlayer = player1;
            // set activePlayer to player 1
    }
        

    // getActivePlayer function that returns activePlayer
    const getActivePlayer = () => activePlayer;

    // create printNewRound function to indicate that a new round has started (prints after a player is finished with their turn)
    const printNewRound = () => {
        // print gameBoard to display the board
        gameboard.printBoard();
        // print that it's activePlayer's turn
        console.log(`It's ${activePlayer.getName()}'s turn`);
    }
        
    
    // create playRound function that takes row, columns,  as parameters
    const playRound = (row, col) => {
        // print that player has placed their spot on row and column
        console.log(`${activePlayer.getName()} has placed their mark`);
        // call gameboard putSpot function and pass row, column and activePlayer as values
        gameboard.putSpot(row, col, activePlayer);

        // win logic
        
        // switch player
        switchPlayer();
        // printNewRound
        printNewRound();
    }
        
    
    // call printNewRound function to display initial round
    printNewRound();

    // return playRound, getActivePlayer
    return {playRound, getActivePlayer};
})();
    


// const game variable for gameController object
gameController.playRound(1, 1);