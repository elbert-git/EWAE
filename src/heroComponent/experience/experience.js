import GenerateMaze from './mazeGenearator.js'
import Physics from './physics.js';
import Visuals from './visuals.js';
import imprintWords from './imprintWords/imprintWords.js';
import isMobile from './isMobile.js';

let instance = null

export default class MazeExperience{
    constructor(parentElement){
        //singleton
        if(instance !== null){return instance}
        instance = this;
        console.log('Experience Created');
         
        // variables
        this.cellLength = 13;
        this.cellThickness = 0.5;
        this.circleRadius = 4;

        // start main classes
        this.parentElement = parentElement;
        this.mazeSize = isMobile() ? {x:20, y:10}:{x:59, y:17};
        this.mazeData = GenerateMaze(this.mazeSize.x, this.mazeSize.y);
        this.physics = new Physics();
        this.visuals = new Visuals(this.parentElement);
         
        // test add document listener add gravity control
        document.addEventListener('keydown', (e)=>{
            const grav = 0.5
            if(e.key === "ArrowUp"){
                e.preventDefault();
                this.physics.setGravity(0,-grav);
            }
            if(e.key === "ArrowDown"){
                e.preventDefault();
                this.physics.setGravity(0,grav);
            }
            if(e.key === "ArrowLeft"){
                e.preventDefault();
                this.physics.setGravity(-grav,0);
            }
            if(e.key === "ArrowRight"){
                e.preventDefault();
                this.physics.setGravity(grav, 0);
            }
        })
         
        // start update loop
        this.update();
    }
     
    update(){
        //update phhysics
        this.physics.update();
        //update visuals
        this.visuals.update();
        //call next update
        setTimeout(this.update.bind(this), 1000/60)
    }
}