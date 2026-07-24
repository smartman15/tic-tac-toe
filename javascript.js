// Gameboard object will contain
const gameboard = (() => {
    // number of rows
    const rows = 3;
    // number of columns
    const cols = 3;
    // gameboard array
    const board = [];

    // loop row times
    for (let i = 0; i < rows; i++) {
        // insert array into index i
        board[i] = [];
        // for loop column times
        for (let j = 0; j < cols; j++) {
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
        if (board[row][column].getValue() === 0) {
            // place player number on row and column
            board[row][column].setValue(player);
        }

        // else 
        else {
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
    return { getBoard, printBoard, putSpot };

})();



// Cell object
function Cell() {
    // value variable to contain the value of player:
    // 0 means its empty
    // player 1 = 1
    // player 2 = 2
    let token = 0;

    // get value of cell function
    const getValue = () => token;
    // set value of cell with player number function
    const setValue = (player) => {
        token = player;
    }

    // return get and set functions
    return { getValue, setValue };
}



// Player object
function Player() {
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

    return { getName, setName, getNumber, setNumber };
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
        if (activePlayer === player1) activePlayer = player2;
        // set activePlayer to player 2

        // else if activePlayer is player 2
        else if (activePlayer === player2) activePlayer = player1;
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
        gameboard.putSpot(row, col, activePlayer.getNumber());

        // win logic
        // if there are 3-in-a-rows vertically, horizontally, or diagonally, it counts as a win
        // create values array to store the values of a row/column in it
        let values = [];
        // if the all the values in the array are the same, it's a win

        // horizontally
        // loop through row
        for (let i = 0; i < 3; i++) {
            // loop through column
            for (let j = 0; j < 3; j++) {
                // push value at index [row][column] into values array
                values.push(gameboard.getBoard()[i][j]);
            }

            const validValues = (v) => ((v.getValue() === values[0].getValue()) && (v.getValue() != 0));
            // if all values in values array are the same
            if (values.every(validValues)) {
                // check which player it is (player 1 or player 2)
                // print "player has won"
                // return
                if (values[0].getValue() == 1) {
                    console.log("Player 1 wins!");
                    console.log("Final board");
                    gameboard.printBoard();
                    return;
                }
                else if (values[0].getValue() == 2) {
                    console.log("Player 2 wins!");
                    console.log("Final board");
                    gameboard.printBoard();
                    return;
                }
                else {
                    console.log("Invalid winner");
                    return;
                }
            }

            else values = [];

        }

        values = [];

        // vertically 
        // loop through row
        for (let i = 0; i < 3; i++) {
            // loop through column
            for (let j = 0; j < 3; j++) {
                // push value at index [column][row] into values array
                values.push(gameboard.getBoard()[j][i]);
            }

            const validValues = (v) => ((v.getValue() === values[0].getValue()) && (v.getValue() != 0));
            // if all values in values array are the same
            if (values.every(validValues)) {

                // check which player it is (player 1 or player 2)
                // print "player has won"
                // return
                if (values[0].getValue() == 1) {
                    console.log("Player 1 wins!");
                    console.log("Final board");
                    gameboard.printBoard();
                    return;
                }
                else if (values[0].getValue() == 2) {
                    console.log("Player 2 wins!");
                    console.log("Final board");
                    gameboard.printBoard();
                    return;
                }
                else {
                    console.log("Invalid winner");
                    return;
                }
            }

            else values = [];

        }


        // diagonally
        // push values at index [0][0], [1][1], [2][2] into values array
        values.push(gameboard.getBoard()[0][0]);
        values.push(gameboard.getBoard()[1][1]);
        values.push(gameboard.getBoard()[2][2]);
        // if all values in values array are the same
        const validValues = (v) => ((v.getValue() === values[0].getValue()) && (v.getValue() != 0));
        if (values.every(validValues)) {
            // check which player it is (player 1 or player 2)
            // print "player has won"
            // return
            if (values[0].getValue() == 1) {
                console.log("Player 1 wins!");
                console.log("Final board");
                gameboard.printBoard();
                return;
            }
            else if (values[0].getValue() == 2) {
                console.log("Player 2 wins!");
                console.log("Final board");
                gameboard.printBoard();
                return;
            }
            else {
                console.log("Invalid winner");
                return;
            }
        }

        else values = [];


        // push values at index [2][0], [1][1], [0][2] into values array
        values.push(gameboard.getBoard()[2][0]);
        values.push(gameboard.getBoard()[1][1]);
        values.push(gameboard.getBoard()[0][2]);
        // if all values in values array are the same
        if (values.every(validValues)) {
            // check which player it is (player 1 or player 2)
            // print "player has won"
            // return
            if (values[0].getValue() == 1) {
                console.log("Player 1 wins!");
                console.log("Final board");
                gameboard.printBoard();
                return;
            }
            else if (values[0].getValue() == 2) {
                console.log("Player 2 wins!");
                console.log("Final board");
                gameboard.printBoard();
                return;
            }
            else {
                console.log("Invalid winner");
                return;
            }
        }

        else values = [];


        // switch player
        switchPlayer();
        // printNewRound
        printNewRound();
    }


    // call printNewRound function to display initial round
    printNewRound();

    // return playRound, getActivePlayer
    return { playRound, getActivePlayer };
})();


const screenController = (() => {
    const playerTurnDiv = document.querySelector('.turn');
    const boardDiv = document.querySelector(".board");

    // updateScreen() function
    const updateScreen = () => {
        // clear boardDiv by setting textcontent to ""
        boardDiv.textContent = "";

        // get activePlayer from gameController
        const activePlayer = gameController.getActivePlayer();
        // get board from gameboard
        const board = gameboard.getBoard();

        // display that it's activePlayer's turn by putting activePlayer as textcontent in playerTurnDiv
        playerTurnDiv.textContent = activePlayer;

        // using forEach to loop through board:
        // loop through board row, index as rowIdx
        board.forEach((row, rowIdx) => {
            // loop through board cell, index as colIdx
            row.forEach((cell, colIdx) => {
                // create cellBtn variable as a button
                let cellBtn = document.createElement("button");
                // give cellBtn a class of 'cell'
                cellBtn.classList.add("cell");

                // give cellBtn data attribute for row and column
                // set row to rowIdx
                cellBtn.dataset.row = rowIdx;
                // set column to colIdx
                cellBtn.dataset.column = colIdx;
                // set cellBtn textcontent to cell value
                cellBtn.textContent = cell.getValue();
                // append cellBtn into boardDiv
                boardDiv.appendChild(cellBtn);
            });    
        });
            
    };
        

    
    // create event listener for board
    // clickEventHandler function, e as parameter
    function clickEventHandler(e){
        // create selectedRow variable 
        // create selectedCol variable
        let selectedRow, selectedCol;
        // set selectedRow with e's rowIdx
        selectedRow = e.target.dataset.row;
        // set selectedCol with e's colIdx
        selectedCol = e.target.dataset.column;

        // create if statement to make sure a row and column has been clicked, not a gap
        if(!selectedRow || !selectedCol) return;

        // pass selectedRow, selectedCol to playRound()
        gameController.playRound(selectedRow, selectedCol);

        // execute updateScreen()
        updateScreen();
    }
        
    // add the clickEventHandler to the board div
    boardDiv.addEventListener("click", clickEventHandler);

    // update screen using updateScreen()
    updateScreen();
})();



// const game variable for gameController object

// horizontal player 1 win
// gameController.playRound(1, 1);
// gameController.playRound(1, 1);
// gameController.playRound(1, 0);
// gameController.playRound(1, 1);
// gameController.playRound(1, 2);

// horizontal player 2 win
// gameController.playRound(1, 1);
// gameController.playRound(2, 1);
// gameController.playRound(1, 1);
// gameController.playRound(2, 0);
// gameController.playRound(1, 1);
// gameController.playRound(2, 2);

// vertical player 1 win
// gameController.playRound(1, 1);
// gameController.playRound(1, 1);
// gameController.playRound(0, 1);
// gameController.playRound(1, 1);
// gameController.playRound(2, 1);

// diagonal win ver 1
// gameController.playRound(1, 1);
// gameController.playRound(1, 1);
// gameController.playRound(0, 0);
// gameController.playRound(1, 1);
// gameController.playRound(2, 2);

// diaognal win ver 2
gameController.playRound(2, 0);
gameController.playRound(2, 0);
gameController.playRound(1, 1);
gameController.playRound(1, 1);
gameController.playRound(0, 2);