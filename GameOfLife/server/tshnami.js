let LivingCreature = require("./livingCreature")

module.exports = class Tshnami extends ListeningCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 4
        //-
        this.direction = {

        }
        //_
    }

    getNewCoordinates() {
        this.directions [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char1, char2) {
        this.getNewCoordinates();
       
        return super.chooseCell(char1, char2);
    }

    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    eat() {
        let foods = this.chooseCell(3,4)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            this.energy++;
            console.log(this.energy);

            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
            for (var i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1);
                    break;
                }
            }

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 14) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell ) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5

            let tsh = new Tshnami(newX, newY)

            tshnamiArr.push(tsh)


        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in tshnamiArr) {
            if (this.x == tshnamiArr[i].x && this.y == tshnamiArr[i].y) {
                tshnamiArr.splice(i, 1);
                break;
            }
        }
    }
}