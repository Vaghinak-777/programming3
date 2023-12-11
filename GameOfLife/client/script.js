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

let matrix = matrixGenerator(20, 20, 10, 5, 2, 10, 9);
let side = 40;
let grassArray = [];
var grassEaterArr = [];
let predatorArr = [];
let vorsordArr = [];
let tshnamiArr = [];
let zombiArr = [];
function setup() {
        frameRate(2);

        createCanvas(matrix[0].length * side, matrix.length * side);
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

}

function draw() {
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


}
console.log("hello world");

