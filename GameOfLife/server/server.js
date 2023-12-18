let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");


app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, vorsordCount, tshnamiCount, zombiCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }
    }

    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }


    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }


    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }

    for (let i = 0; i < vorsordCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }

    for (let i = 0; i < tshnamiCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }

    for (let i = 0; i < zombiCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }





    return matrix;
}

matrix = matrixGenerator(20, 20, 10, 5, 2, 10, 9);

io.sockets.emit('send matrix', matrix)


grassArray = [];
grassEaterArr = [];
predatorArr = [];
vorsordArr = [];
tshnamiArr = [];
zombiArr = [];

Grass = require("./grass");
GrassEater = require("./grassEater");
Predator = require("./predator");
Vorsord = require("./vorsord");
Tshnami = require("./tshnami");
Zombi = require("./zombi");

function createObject(matrix){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArray.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let gre = new GrassEater(x, y)
                grassEaterArr.push(gre);
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                let vors = new Vorsord(x, y)
                vorsordArr.push(vors)

            }
            else if (matrix[y][x] == 5) {
                let tsh = new Tshnami(x, y)
                tshnamiArr.push(tsh)

            }
            else if (matrix[y][x] == 6) {
                let zom = new Zombi(x, y)
                zombiArr.push(zom)

            }


        }
    }

    io.sockets.emit('send matrix', matrix)

}

function game() {
    for (var i in grassArray) {
        grassArray[i].mul();
}

for (let index = 0; index < grassEaterArr.length; index++) {
        grassEaterArr[index].eat();
}

for (let index = 0; index < predatorArr.length; index++) {
        predatorArr[index].eat();
}

for (let index = 0; index < vorsordArr.length; index++) {
        vorsordArr[index].eat();
}

for (let index = 0; index < tshnamiArr.length; index++) {
        tshnamiArr[index].eat();
}

for (let index = 0; index < zombiArr.length; index++) {
        zombiArr[index].eat();
}
    io.sockets.emit("send matrix", matrix);
}




setInterval(game, 1000)
io.on('connection', function () {
    createObject(matrix)
})

let statistickObj = {
    grass:0,
    grassEater:0,
    predator:0,
    tshnami:0,
    vorsord:0,
    zombi:0,
    varaq:0,
}

setInterval(function(){
    statistickObj.grass = grassArray.length;
    statistickObj.grassEater = grassArray.length;
    statistickObj.predator = grassArray.length;
    statistickObj.tshnami= grassArray.length;
    statistickObj.vorsord = grassArray.length;
    statistickObj.zombi = grassArray.length;
    statistickObj.varaq = grassArray.length;

    let result = JSON.stringify(statistickObj)

}, 1000)