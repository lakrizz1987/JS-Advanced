function solve(arr) {
    let board = [[false, false, false],
    [false, false, false],
    [false, false, false]]

    let noWins = true;

    let i = 0;
    let turns = 0;
    while (arr.length > 0) {
        let mark;

        if (i % 2 == 0) {
            mark = 'X'
        } else {
            mark = 'O'
        }

        let [row, index] = arr.shift().split(' ').map(Number);

        if (board[row][index] != false) {
            console.log("This place is already taken. Please choose another!");
            i--;
        } else {
            board[row][index] = mark;
            turns++;
        }


        if (CheckWin(board, mark)) {
            noWins = false
            console.log(`Player ${mark} wins!`);
            board.forEach(arr => console.log(`${arr[0]}\t${arr[1]}\t${arr[2]}`));
            return;
        }

        i++;

        if (turns == 9) {
            break;
        }
    }

    if (noWins) {
        console.log("The game ended! Nobody wins :(");
        board.forEach(arr => console.log(`${arr[0]}\t${arr[1]}\t${arr[2]}`));
    }

    function CheckWin(board, mark) {
        //check rows
        for (let row of board) {
            if (row[0] == mark && row[1] == mark && row[2] == mark) {
                return true;
            }
        }

        //check columns
        for (let i = 0; i < board.length; i++) {
            if (board[0][i] == mark && board[1][i] == mark && board[2][i] == mark) {
                return true;
            }
        }
        //check diagonals
        if (board[0][0] == mark && board[1][1] == mark && board[2][2] == mark) {
            return true;
        }

        if (board[0][2] == mark && board[1][1] == mark && board[2][0] == mark) {
            return true;
        }

        return false;
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]


)

