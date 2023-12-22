var socket = io();

let side = 40;

function setup() {
        frameRate(2);

        createCanvas(20 * side, 20* side);
 

}

let btn = document.getElementsByClassName("btn")
let Bombs = document.getElementById("Bombs")
Bombs.addEventListener("click",boom)


function boom(){
        console.log(boom)
}


function reload(){
    location.reload();
}

btn[0].addEventListener("click",reload)


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

setInterval(
        function () {
        socket.on('send matrix', drawGame)
        },1000
    )


