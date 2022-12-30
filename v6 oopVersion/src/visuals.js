import MazeExperience from "./experience.js";

export default class Visuals{
    constructor(parentElement){
        console.log('visuals started');
        //variavbles
        this.parentElement = parentElement;
        this.experience = new MazeExperience();
        this.cellWidth = this.experience.cellLength;
        //create canvas
        this.elCanvas = document.createElement("canvas");
        this.ctx = this.elCanvas.getContext("2d");
        //set cavnas size
        this.elCanvas.width = 500; this.elCanvas.height = 500;
        //attach to dom
        this.parentElement.appendChild(this.elCanvas);
        // todo handle on resize
    }
    clear(){
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.fillStyle = "white";
        this.ctx.rect(0,0, this.elCanvas.clientWidth, this.elCanvas.clientHeight);
        this.ctx.fill();
    }
    highlightCell(cell, color){
        this.ctx.fillStyle = color;
        const cornerPostion = {x: cell.position.xIndex * this.cellWidth, y: cell.position.yIndex * this.cellWidth}
        this.ctx.beginPath();
        this.ctx.moveTo(cornerPostion.x, cornerPostion.y);
        this.ctx.rect(cornerPostion.x, cornerPostion.y, this.cellWidth, this.cellWidth);
        this.ctx.fill();
    }
    drawWalls(){
       this.ctx.lineWidth = this.experience.cellThickness;
       const mazeData = new MazeExperience().mazeData;
       for (let xIndex = 0; xIndex < mazeData.length; xIndex++) {
           const column = mazeData[xIndex];
           for (let yIndex = 0; yIndex < column.length; yIndex++) {
                const cell = column[yIndex];
                const cornerPostion = {x: cell.position.xIndex * this.cellWidth, y: cell.position.yIndex * this.cellWidth}
                //draw top
                if(cell.walls[0]){
                    this.ctx.beginPath();
                    this.ctx.moveTo(cornerPostion.x, cornerPostion. y);
                    this.ctx.lineTo(cornerPostion.x + this.cellWidth, cornerPostion.y);
                    this.ctx.stroke();
                }
                if(cell.walls[1]){
                    this.ctx.beginPath();
                    this.ctx.moveTo(cornerPostion.x + this.cellWidth, cornerPostion. y);
                    this.ctx.lineTo(cornerPostion.x + this.cellWidth, cornerPostion.y + this.cellWidth);
                    this.ctx.stroke();
                }
                if(cell.walls[2]){
                    this.ctx.beginPath();
                    this.ctx.moveTo(cornerPostion.x, cornerPostion. y + this.cellWidth);
                    this.ctx.lineTo(cornerPostion.x + this.cellWidth, cornerPostion.y + this.cellWidth);
                    this.ctx.stroke();
                }
                if(cell.walls[3]){
                    this.ctx.beginPath();
                    this.ctx.moveTo(cornerPostion.x, cornerPostion. y + this.cellWidth);
                    this.ctx.lineTo(cornerPostion.x, cornerPostion.y);
                    this.ctx.stroke();
                }
           }
       }
    }
    drawCircle(){
        const data = this.experience.physics.circleBody;
        this.ctx.moveTo(data.position.x, data.position.y);
        this.ctx.beginPath();
        this.ctx.arc(data.position.x, data.position.y, this.experience.circleRadius, 0, 2*Math.PI);
        this.ctx.stroke();
    }
    update(){
        // clear canvas
        this.clear();
        // draw walls
        this.drawWalls()
        // draw circle
        this.drawCircle()
    }
}