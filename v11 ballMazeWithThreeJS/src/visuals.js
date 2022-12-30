import MazeExperience from "./experience.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as THREE from 'three';

// export default class Visuals{
//     constructor(parentElement){
//         console.log('visuals started');
//         //variavbles
//         this.parentElement = parentElement;
//         this.experience = new MazeExperience();
//         this.cellWidth = this.experience.cellLength;
//         //create canvas
//         this.elCanvas = document.createElement("canvas");
//         this.ctx = this.elCanvas.getContext("2d");
//         this.ctx.strokeStyle = "white"
//         //set cavnas size
//         this.elCanvas.width = 1500; this.elCanvas.height = 500;
//         //attach to dom
//         this.parentElement.appendChild(this.elCanvas);
//         // todo handle on resize
//     }
//     clear(){
//         this.ctx.beginPath();
//         this.ctx.moveTo(0,0);
//         this.ctx.fillStyle = "black";
//         this.ctx.rect(0,0, this.elCanvas.clientWidth, this.elCanvas.clientHeight);
//         this.ctx.fill();
//     }
//     highlightCell(cell, color){
//         this.ctx.fillStyle = color;
//         const cornerPostion = {x: cell.position.xIndex * this.cellWidth, y: cell.position.yIndex * this.cellWidth}
//         this.ctx.beginPath();
//         this.ctx.moveTo(cornerPostion.x, cornerPostion.y);
//         this.ctx.rect(cornerPostion.x, cornerPostion.y, this.cellWidth, this.cellWidth);
//         this.ctx.fill();
//     }
//     drawWalls(){
//        this.ctx.lineWidth = this.experience.cellThickness;
//        const mazeData = new MazeExperience().mazeData;
//        this.ctx.strokeStyle = "white"
//        this.ctx.lineWidth = 1;
//        for (let xIndex = 0; xIndex < mazeData.length; xIndex++) {
//            const column = mazeData[xIndex];
//            for (let yIndex = 0; yIndex < column.length; yIndex++) {
//                 const cell = column[yIndex];
//                 const cornerPostion = {x: cell.position.xIndex * this.cellWidth, y: cell.position.yIndex * this.cellWidth}
//                 //draw top
//                 if(cell.walls[0]){
//                     this.ctx.beginPath();
//                     this.ctx.moveTo(cornerPostion.x, cornerPostion. y);
//                     this.ctx.lineTo(cornerPostion.x + this.cellWidth, cornerPostion.y);
//                     this.ctx.stroke();
//                 }
//                 if(cell.walls[1]){
//                     this.ctx.beginPath();
//                     this.ctx.moveTo(cornerPostion.x + this.cellWidth, cornerPostion. y);
//                     this.ctx.lineTo(cornerPostion.x + this.cellWidth, cornerPostion.y + this.cellWidth);
//                     this.ctx.stroke();
//                 }
//                 if(cell.walls[2]){
//                     this.ctx.beginPath();
//                     this.ctx.moveTo(cornerPostion.x, cornerPostion. y + this.cellWidth);
//                     this.ctx.lineTo(cornerPostion.x + this.cellWidth, cornerPostion.y + this.cellWidth);
//                     this.ctx.stroke();
//                 }
//                 if(cell.walls[3]){ 
//                     this.ctx.beginPath();
//                     this.ctx.moveTo(cornerPostion.x, cornerPostion. y + this.cellWidth);
//                     this.ctx.lineTo(cornerPostion.x, cornerPostion.y);
//                     this.ctx.stroke();
//                 }
//            }
//        }
//     }
//     drawCircle(){
//         const data = this.experience.physics.circleBody;
//         this.ctx.moveTo(data.position.x, data.position.y);
//         this.ctx.beginPath();
//         this.ctx.arc(data.position.x, data.position.y, this.experience.circleRadius, 0, 2*Math.PI);
//         this.ctx.stroke();
//     }
//     highlightLetters(){
//         const mazeData = this.experience.mazeData
//         for (let xIndex = 0; xIndex < mazeData.length; xIndex++) {
//             const column = mazeData[xIndex];
//             for (let yIndex = 0; yIndex < column.length; yIndex++) {
//                 const cell = column[yIndex];
//                 if(cell.isLetter){
//                     this.highlightCell(cell, "white");
//                 }
//             }
//         }
//     }
//     update(){
//         // clear canvas
//         this.clear();
//         // draw walls
//         this.drawWalls()
//         //highlight letters
//         this.highlightLetters();
//         // draw circle
//         this.drawCircle()
//     }
// }

export default class Visuals{
    constructor(parentElement){
        // get references
        this.experience = new MazeExperience();

        // create scene object
        this.scene = new THREE.Scene();

        // set canvas size
        this.elCanvas = parentElement;
        this.elCanvas.style.maxWidth = "500px";
        this.elCanvas.style.height = "500px";

        // create camera
        this.camera = new THREE.PerspectiveCamera( 75, this.elCanvas.clientWidth / this.elCanvas.clientHeight, 0.1, 1000 );

        // create renderer
        this.renderer = new THREE.WebGLRenderer();
        // set renderer size
        this.renderer.setSize(this.elCanvas.clientWidth, this.elCanvas.clientHeight);
        // connect renderer to html canvas
        this.elCanvas.appendChild(this.renderer.domElement);

        // orbit controls
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.camera.position.set(50, 100, 0)

        // create walls
        this.createWallsFromMazeData();

        // on window resize. update cam and renderer sizes
        window.addEventListener('resize', () =>
        {
            // Update sizes
            const sizes = {width: this.elCanvas.clientWidth, height: this.elCanvas.clientHeight}

            // Update camera
            this.camera.aspect = sizes.width / sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(sizes.width, sizes.height)
            // set pixel ration
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })
         
    }

    update() {
        // .... logic every frame
        this.orbitControls.update();

        // call a frame render
        this.renderer.render( this.scene, this.camera );
    };
     
    createWallsFromMazeData(){
        const mazeData = this.experience.mazeData
        const cubeHeight = 4;
        const cubeThickness = this.experience.cellThickness * 0.5;
        for (let xIndex = 0; xIndex < mazeData.length; xIndex++) {
            const column = mazeData[xIndex]
            for (let yIndex = 0; yIndex < column.length; yIndex++) {
                const cell = column[yIndex];
                if(cell.walls[0]){
                    this.createCube(
                        xIndex*this.experience.cellLength + (this.experience.cellLength/2),
                        yIndex*this.experience.cellLength,
                        this.experience.cellLength,
                        cubeThickness,
                        cubeHeight
                        )
                }
                if(cell.walls[1]){
                    this.createCube(
                        xIndex*this.experience.cellLength + (this.experience.cellLength),
                        yIndex*this.experience.cellLength + (this.experience.cellLength/2),
                        cubeThickness,
                        this.experience.cellLength,
                        cubeHeight
                        )
                }
                if(cell.walls[2]){
                    this.createCube(
                        xIndex*this.experience.cellLength + (this.experience.cellLength/2),
                        yIndex*this.experience.cellLength + (this.experience.cellLength),
                        this.experience.cellLength,
                        cubeThickness,
                        cubeHeight
                        )
                }
                if(cell.walls[3]){
                    this.createCube(
                        xIndex*this.experience.cellLength,
                        yIndex*this.experience.cellLength + (this.experience.cellLength/2),
                        cubeThickness,
                        this.experience.cellLength,
                        cubeHeight
                        )
                }
                if(cell.isLetter){
                    this.createCube(
                        xIndex*this.experience.cellLength + (this.experience.cellLength/2),
                        yIndex*this.experience.cellLength + (this.experience.cellLength/2),
                        this.experience.cellLength, 
                        this.experience.cellLength,
                        cubeHeight
                    )
                }
            }
        }
    }
     
    createCube(x, y, length, width, height){
        // create cube geometry
        const geometry = new THREE.BoxGeometry(length, height, width);
        // create material 
        const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        // create cube object from cube geo and material
        const cube = new THREE.Mesh( geometry, material );
        cube.position.set(x, 0, y);
        // add cube to scene
        this.scene.add( cube );
    }
}
