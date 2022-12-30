import MazeExperience from "./experience.js";

export default class Physics{
    constructor(){
        console.log('created physics')
        // references
        this.experience = new MazeExperience();
        this.mazeData = this.experience.mazeData;
        // variables
        this.cellLength = this.experience.cellLength;
        this.cellThickness = this.experience.cellThickness;
        // get Matter Classes
        this.EngineClass = Matter.Engine;
        this.BodiesClass = Matter.Bodies;
        this.CompositeClass = Matter.Composite;
         
        // create physics world
        this.engine = this.EngineClass.create();

        for (let xIndex = 0; xIndex < this.mazeData.length; xIndex++) {
            const column = this.mazeData[xIndex];
            for (let yIndex = 0; yIndex < column.length; yIndex++) {
                const cell = column[yIndex];
                if(cell.walls[0]){
                    const body = this.BodiesClass.rectangle(
                        cell.position.xIndex * this.cellLength + (this.cellLength/2),
                        cell.position.yIndex * this.cellLength,
                        this.cellLength,
                        this.cellThickness,
                        {isStatic: true}
                    )
                    this.CompositeClass.add(this.engine.world, [body]);
                }
                if(cell.walls[1]){
                    const body = this.BodiesClass.rectangle(
                        cell.position.xIndex * this.cellLength + this.cellLength,
                        cell.position.yIndex * this.cellLength + (this.cellLength/2),
                        this.cellThickness,
                        this.cellLength,
                        {isStatic: true}
                    )
                    this.CompositeClass.add(this.engine.world, [body]);
                }
                if(cell.walls[2]){
                    const body = this.BodiesClass.rectangle(
                        cell.position.xIndex * this.cellLength + (this.cellLength/2),
                        cell.position.yIndex * this.cellLength + this.cellLength,
                        this.cellLength,
                        this.cellThickness,
                        {isStatic: true}
                    )
                    this.CompositeClass.add(this.engine.world, [body]);
                }
                if(cell.walls[3]){
                    const body = this.BodiesClass.rectangle(
                        cell.position.xIndex * this.cellLength,
                        cell.position.yIndex * this.cellLength + (this.cellLength/2),
                        this.cellThickness,
                        this.cellLength,
                        {isStatic: true}
                    )
                    this.CompositeClass.add(this.engine.world, [body]);
                }
            }
        }
        // create circle
        this.circleBody = this.BodiesClass.circle(10,10, this.experience.circleRadius);
        this.circleBody.restitution = 0.3
        this.CompositeClass.add(this.engine.world, [this.circleBody]);
    }
    update(){
        this.EngineClass.update(this.engine);
    }
    setGravity(x, y){
        this.engine.gravity.x = x;
        this.engine.gravity.y = y;
    }
}