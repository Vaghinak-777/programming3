let LivingCreature = require("./livingCreature")

module.exports = class Grass extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
       
    

module.exports = class Grass extends LivingCreature{
    

    

    mul(){
        if (this.multiply >= 3) {
            let emptyCells = super.chooseCell(0)
            
        this.multiply++;
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);

        if(newCell && this.multiply >= 4){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            let newGrass = new Grass(newX, newY);
            grassArray.push(newGrass);
            this.multiply = 0;
        }
    }

}