
let candies, candyBoard, rows, columns, score;
candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
rows = 9;
columns = 9;
score = 0;
candyBoard = [];

window.onload = function () {
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

            // Dragging Functionality
            tile.addEventListener("dragStart", dragStart);
            tile.addEventListener("dragOver", dragOver);
            tile.addEventListener("dragEnter", dragEnter);
            tile.addEventListener("dragLeave", dragLeave);
            tile.addEventListener("dragDrop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("candyBoard").append(tile);
            row.push(tile);
        }
        candyBoard.push(row);
    }

    console.log(candyBoard);
}

function dragStart() {
    currTile = this;
}

function dragOver() {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    // If the current Tile or the other tile is blank 
    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }
    // Grab the coordinates from the img tag id
    let currCoords = currTile.id.split("-"); // id="0-0" -> ["0", "0"]

    // assign the coordinates to the currentTile
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);
}