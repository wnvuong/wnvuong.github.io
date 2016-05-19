var xGoes = null;
var board = null;
var gameOver = false;

resetBoardModel();

function blockSelected(elem) {
  if (elem.innerHTML.trim() === "" && !gameOver) {
    // set the marker
    if (xGoes) {
      elem.appendChild(getX());
    } else {
      elem.appendChild(getO());
    }

    // set the board
    var row = parseInt(elem.dataset.row);
    var col = parseInt(elem.dataset.col);
    board[row][col] = xGoes ? "x" : "o";
    printBoard();

    // check if winner
    isWinner(xGoes ? "x" : "o", row, col);

    // switch the flag
    xGoes = !xGoes;
  }
}

function resetBoardView() {
  var blocks = document.getElementsByClassName("block");
  Array.prototype.forEach.call(blocks, function(elem, index) {
    elem.innerHTML = "";
    elem.className = "block";
  });
}

function resetBoardModel() {
  board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
  xGoes = true;
  gameOver = false;
}

function getX() {
  var x = document.createElement("div");
  x.className = "marker x";
  x.innerHTML = "<div class=\"left\"></div><div class=\"right\"></div>";
  return x;
}

function getO() {
  var o = document.createElement("div");
  o.className = "marker o";
  o.innerHTML = "<div class=\"circle\"></div>";
  return o;
}

function printBoard() {
  for (var x = 0; x < board.length; x++) {
    console.log("[" + board[x][0] + "] [" + board[x][1] + "] [" + board[x][2] + "]");
  }
}

function isWinner(currMarker, row, col) {
  var blockA = null;
  var blockB = null;
  var blockC = null;

  switch (row) {
    case 0:
    switch (col) {
      case 0:
        if (board[0][1] == currMarker && board[0][2] == currMarker) {
          blockA = document.getElementById("00");
          blockB = document.getElementById("01");
          blockC = document.getElementById("02");
        } else if (board[1][1] == currMarker && board[2][2] == currMarker) {
          blockA = document.getElementById("00");
          blockB = document.getElementById("11");
          blockC = document.getElementById("22");
        } else if (board[1][0] == currMarker && board[2][0] == currMarker) {
          blockA = document.getElementById("00");
          blockB = document.getElementById("10");
          blockC = document.getElementById("20");
        }
      break;
      case 1:
        if (board[0][0] == currMarker && board[0][2] == currMarker) {
          blockA = document.getElementById("00");
          blockB = document.getElementById("01");
          blockC = document.getElementById("02");
        } else if (board[1][1] == currMarker && board[2][1] == currMarker) {
          blockA = document.getElementById("00");
          blockB = document.getElementById("11");
          blockC = document.getElementById("22");
        }
      break;
      case 2:
        if (board[0][0] == currMarker && board[0][1] == currMarker) {
          blockA = document.getElementById("00");
          blockB = document.getElementById("01");
          blockC = document.getElementById("02");
        } else if (board[2][0] == currMarker && board[1][1] == currMarker) {
          blockA = document.getElementById("02");
          blockB = document.getElementById("11");
          blockC = document.getElementById("20");
        } else if (board[2][2] == currMarker && board[1][2] == currMarker) {
          blockA = document.getElementById("02");
          blockB = document.getElementById("12");
          blockC = document.getElementById("22");
        }
      break;
    }
    break;
    case 1:
    switch (col) {
      case 0:
        if (board[0][0] == currMarker && board[2][0] == currMarker) {
          blockA = document.getElementById("10");
          blockB = document.getElementById("00");
          blockC = document.getElementById("20");
        } else if (board[1][1] == currMarker && board[1][2] == currMarker) {
          blockA = document.getElementById("10");
          blockB = document.getElementById("11");
          blockC = document.getElementById("12");
        }
      break;
      case 1:
        if (board[0][0] == currMarker && board[2][2] == currMarker) {
          blockA = document.getElementById("11");
          blockB = document.getElementById("00");
          blockC = document.getElementById("22");
        } else if (board[0][1] == currMarker && board[2][1] == currMarker) {
          blockA = document.getElementById("11");
          blockB = document.getElementById("01");
          blockC = document.getElementById("21");
        } else if (board[0][2] == currMarker && board[2][0] == currMarker) {
          blockA = document.getElementById("11");
          blockB = document.getElementById("02");
          blockC = document.getElementById("20");
        } else if (board[1][0] == currMarker && board[1][2] == currMarker) {
          blockA = document.getElementById("11");
          blockB = document.getElementById("10");
          blockC = document.getElementById("12");
        }
      break;
      case 2:
      if (board[0][2] == currMarker && board[2][2] == currMarker) {
        blockA = document.getElementById("12");
        blockB = document.getElementById("02");
        blockC = document.getElementById("22");
      } else if (board[1][0] == currMarker && board[1][1] == currMarker) {
        blockA = document.getElementById("12");
        blockB = document.getElementById("10");
        blockC = document.getElementById("11");
      }
      break;
    }
    break;
    case 2:
    switch (col) {
      case 0:
        if (board[0][0] == currMarker && board[1][0] == currMarker) {
          blockA = document.getElementById("20");
          blockB = document.getElementById("00");
          blockC = document.getElementById("10");
        } else if (board[1][1] == currMarker && board[0][2] == currMarker) {
          blockA = document.getElementById("20");
          blockB = document.getElementById("11");
          blockC = document.getElementById("02");
        } else if (board[2][1] == currMarker && board[2][2] == currMarker) {
          blockA = document.getElementById("20");
          blockB = document.getElementById("21");
          blockC = document.getElementById("22");
        }
        break;
      case 1:
        if (board[2][0] == currMarker && board[2][2] == currMarker) {
          blockA = document.getElementById("21");
          blockB = document.getElementById("20");
          blockC = document.getElementById("22");
        } else if (board[0][1] == currMarker && board[1][1] == currMarker) {
          blockA = document.getElementById("21");
          blockB = document.getElementById("01");
          blockC = document.getElementById("11");
        }
        break;
      case 2:
        if (board[0][0] == currMarker && board[1][1] == currMarker) {
          blockA = document.getElementById("22");
          blockB = document.getElementById("00");
          blockC = document.getElementById("11");
        } else if (board[2][0] == currMarker && board[2][1] == currMarker) {
          blockA = document.getElementById("22");
          blockB = document.getElementById("20");
          blockC = document.getElementById("21");
        } else if (board[0][2] == currMarker && board[1][2] == currMarker) {
          blockA = document.getElementById("22");
          blockB = document.getElementById("02");
          blockC = document.getElementById("12");
        }
        break;
    }
    break;
  }

  if (blockA !== null && blockB !== null && blockC !== null) {
    blockA.className += " winner";
    blockB.className += " winner";
    blockC.className += " winner";
    gameOver = true;
  }
}
