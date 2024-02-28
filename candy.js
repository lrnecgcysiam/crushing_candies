
let candies, candyBoard, rows, columns, score;
candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
rows = 9;
columns = 9;
score = 0;
candyBoard = [];

window.onload = function() {
    gameStart();

}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)]; 0 - 5.99
}


function gameStart() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // <img id="0-0" src="./images/Red.png">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";

            document.getElementById("candyBoard").append(tile);
            row.push(tile);
        }
        candyBoard.push(row);
    }

    console.log(candyBoard);
}