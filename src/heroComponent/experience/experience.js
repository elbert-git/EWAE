import GenerateMaze from './mazeGenearator.js'
import Physics from './physics.js';
import Visuals from './visuals.js';
import isMobile from './isMobile.js';
import Input from './input.js';
import UIController from './UIController.js';

let instance = null

export default class MazeExperience{
    constructor(parentElement){
        //singleton
        if(instance !== null){return instance}
        instance = this;
        console.log('Experience Created');
         
        // variables
        this.parentElement = parentElement;
        this.cellLength = 13;
        this.cellThickness = 0.5;
        this.circleRadius = 4;

        // start main classes
        this.initMaze();
         
        // start update loop
        this.update();
         
        //start timer for tutorial 
    }
     
    initMaze(){
        // start main classes
        this.mazeSize = isMobile() ? {x:20, y:10}:{x:59, y:17};
        this.mazeData = GenerateMaze(this.mazeSize.x, this.mazeSize.y);
        this.input = new Input(this.parentElement)
        this.physics = new Physics();
        this.visuals = new Visuals(this.parentElement);
        this.UI = new UIController(this.parentElement);
    }
    win(){
        //show win in ui
        this.UI.showWin();
        //change maze data
        this.mazeSize = isMobile() ? {x:20, y:10}:{x:59, y:17};
        this.mazeData = GenerateMaze(this.mazeSize.x, this.mazeSize.y);
        this.input = new Input(this.parentElement)
        this.physics = new Physics();
        //reconnect input to visuals
        this.visuals.input = this.input;
    }
     
    update(){
        //update input
        this.input.update();
        //update phhysics
        this.physics.update();
        //update visuals
        this.visuals.update();
        //call next update
        setTimeout(this.update.bind(this), 1000/60)
    }
}