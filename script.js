const gameCells = document.querySelectorAll(".cell")

let currentPlayer = "X"

gameCells.forEach(cell => cell.addEventListener("click", function() {
    if (cell.textContent !== "") {
        return
    }

    cell.textContent = currentPlayer
    switchPlayer()
}))

function switchPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else if (currentPlayer === "O") {
        currentPlayer = "X"
    }
}