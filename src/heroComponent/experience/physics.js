import MazeExperience from "./experience.js";
import * as Matter from "matter-js";

export default class Physics{
    constructor(){
        console.log('created physics')
        // references
        this.experience = new MazeExperience();
        this.mazeData = this.experience.mazeData;
        this.input = this.experience.input;
        // variables
        this.cellLength = this.experience.cellLength;
        this.cellThickness = this.experience.cellThickness;
        this.grav = 0.4;
        // get Matter Classes
        this.EngineClass = Matter.Engine;
        this.BodiesClass = Matter.Bodies;
        this.CompositeClass = Matter.Composite;
         
        //handle goal stuff
        this.goalPosition = {
            x: (this.mazeData.length-1) * this.cellLength  + this.cellLength/2,
            y: (this.mazeData[0].length-1) * this.cellLength + this.cellLength/2,
        }
        this.goalThreshold = 4
         
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
         
        //zero out gravity on start
        this.setGravity(0,0)
    }
    update(){
        //update gravity
        this.setGravity(
            this.input.lerpedInputVector.x,
            this.input.lerpedInputVector.y,
        )
         
        //step engine forward
        this.EngineClass.update(this.engine);
         
        //check for winning condition
        if(this.getDistanceToGoal() < this.goalThreshold){
            this.experience.win();
        }
    }
    setGravity(x, y){
        this.engine.gravity.x = x * this.grav;
        this.engine.gravity.y = y * this.grav;
    }
     
    getDistanceToGoal(){
        const ballPosition = {
            x: this.circleBody.position.x,
            y: this.circleBody.position.y,
        }
         
        const vector = this.findDirectionalVector(ballPosition, this.goalPosition)
        
        return Math.sqrt(vector.x*vector.x + vector.y*vector.y);
    }

    findDirectionalVector(from, to){
        return {
            x: to.x - from.x,
            y: to.y - from.y
        }
    }
}