// Gameboard object will contain
    // number of rows
    // number of columns
    // gameboard array

    // loop row times
        // insert array into index i
        // for loop column times
            // push cell into array index i

    // get gameboard function

    // putSpot function for player to put their spot in gameboard
    // pass row, column, player as parameters

        // if the spot on row and column is empty
            // place player number on row and column

        // else 
            // print invalid row and column
            
    // print board function
        // create boardWithCells variable
        // perform map on it, pass row as parameter
        // for each element in the row, get the value of the cell
        // boardWithCells now contains an array containing the cells

        // print boardWithCells


// Cell object
    // value variable to contain the value of player:
    // 0 means its empty
    // player 1 = 1
    // player 2 = 2

    // get value of cell function
    // set value of cell with player number function

    // return get and set functions


// Player object
    // number variable (to put into cells later)
    
    // get name function
    // set name function


// GameController object
    // create player 1 and player 2 objects
    // create gameboard object

    // create activePlayer variable to keep track of whose turn it is

    // create switchPlayer function to take turns 
        // if activePlayer is player 1
            // set activePlayer to player 2
        
        // else if activePlayer is player 2
            // set activePlayer to player 1

    // getActivePlayer function that returns activePlayer

    // create printNewRound function to indicate that a new round has started (prints after a player is finished with their turn)
        // print gameBoard to display the board
        // print that it's activePlayer's turn
    
    // create playRound function that takes row, columns,  as parameters
        // print that player has placed their spot on row and column
        // call gameboard putSpot function and pass row, colmun and activePlayer as values

        // win logic
        
        // switch player
        // printNewRound
    
    // call printNewRound function to display initial round

    // return playRound, getActivePlayer