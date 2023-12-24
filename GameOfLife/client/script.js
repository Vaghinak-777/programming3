var socket = io();

let side = 40;

function setup() {
        frameRate(2);

        createCanvas(20 * side, 20* side);
 

}

let restartBtn = document.getElementById("restart")
restartBtn.addEventListener("click", handleRestart)

function handleRestart(){
        socket.emit("restart")
}


function drawGame(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill('yellow')
                        } else if (matrix[y][x] == 3) {
                                fill('blue')
                        } else if (matrix[y][x] == 4) {
                                fill('black')
                        } else if (matrix[y][x] == 5) {
                                fill('red')
                        } else if (matrix[y][x] == 6) {
                                fill('maroon')
                        }

                        else {
                                fill("gray")
                        }


                        rect(x * side, y * side, side, side)
                }
        }


}

socket.on('send matrix', drawGame)



