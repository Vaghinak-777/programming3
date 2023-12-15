class Zombi {
    constructor(x, y) { 
        this.x = x
        this.y = y
        this.energy = 20
        this.direction = {

        }
    }

    getNewCoordinates() {
        this.directions = [
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
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 6
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    eat() {
        let foods = this.chooseCell(2,3,4,5)
        let food = random(foods)
        if (food) {
            this.energy++;
            console.log(this.energy);

            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 6
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
        let newCell = random(emptyCell)

        if (newCell ) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6

            let zom = new Zombi(newX, newY)

            zombiArr.push(zom)


        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in zombiArr) {
            if (this.x == zombiArr[i].x && this.y == zombiArr[i].y) {
                zombiArr.splice(i, 1);
                break;
            }
        }
    }
}