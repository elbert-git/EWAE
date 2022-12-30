export default class CanvasMazeVisualiser{
    constructor(cellWidth){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext("2d");
        //default settings
        this.cellWidth = cellWidth;
    }
    
    clear(){
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.fillStyle = "white";
        this.ctx.rect(0,0, this.canvas.clientWidth, this.canvas.clientHeight);
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
    drawWalls(mazeData){
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
    drawCircle(data){
        this.ctx.moveTo(data.position.x, data.position.y);
        this.ctx.beginPath();
        this.ctx.arc(data.position.x, data.position.y, 3, 0, 2*Math.PI);
        this.ctx.stroke();
    }
    engineViz(mazeData, circleData){
        this.clear();
        this.drawWalls(mazeData);
        this.drawCircle(circleData);
    }
}
