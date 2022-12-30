import {GenerateMaze, GenerateMazeWithLetters} from './mazeGenearator.js'
import Physics from './physics.js';
import Visuals from './visuals.js';

let instance = null

// ----------- tempdata
const tempLetterPattern = [
    [true, true, false, false, false],
    [true, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, true],
]
const tempLines = [{
        word: [tempLetterPattern, tempLetterPattern, tempLetterPattern],
        margin: 0
    }]






export default class MazeExperience{
    constructor(parentElement){
        //singleton
        if(instance !== null){return instance}
        instance = this;
        console.log('Experience Created');
         
        // variables
        this.cellLength = 20;
        this.cellThickness = 4;
        this.circleRadius = 3;

        // start main classes
        this.parentElement = parentElement;
        this.mazeData = GenerateMazeWithLetters(3, tempLines);
        this.physics = new Physics();
        this.visuals = new Visuals(this.parentElement);
         
        // test add document listener add gravity control
        document.addEventListener('keydown', (e)=>{
            const grav = 0.3
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