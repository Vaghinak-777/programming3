var socket = io();

let side = 40;
let weather = "";


function handleWinter() {
        weather = "winter"
}
function handleSpring() {
        weather = ""
}
function handleSummer() {
        weather = "summer"
}
function handleAutumn() {
        weather = "autumn"
}

function setup() {
        frameRate(2);

        createCanvas(20 * side, 20 * side);


}

let restartBtn = document.getElementById("restart")
let winterBtn = document.getElementById("winter")
let summerBtn = document.getElementById("summer")
let autumtBtn = document.getElementById("autumn")
let springBtn = document.getElementById("spring")

restartBtn.addEventListener("click", handleRestart)
winterBtn.addEventListener("click", handleWinter)
summerBtn.addEventListener("click", handleSummer)
autumtBtn.addEventListener("click", handleAutumn)
springBtn.addEventListener("click", handleSpring)

function handleRestart() {
        socket.emit("restart")
}


function drawGame(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                if (weather == "winter") {
                                        fill("white")
                                } else if (weather == "summer") {
                                        fill("yellow")

                                } else if (weather == "autumn") {
                                        fill("orange")

                                } else {
                                        fill("green")
                                }
                        } else if (matrix[y][x] == 2) {
                                if (weather == "winter") {
                                        fill("darkGray")
                                } else if (weather == "summer") {
                                        fill("brown")

                                } else if (weather == "autumn") {
                                        fill("pink")

                                } else {
                                        fill('yellow')

                                }
                        } else if (matrix[y][x] == 3) {
                                if (weather == "winter") {
                                        fill("aqua")
                                } else if (weather == "summer") {
                                        fill("red")

                                } else if (weather == "autumn") {
                                        fill("purple")

                                } else {
                                        fill('blue')

                                }
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



