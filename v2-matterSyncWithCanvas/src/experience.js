import Circle from "./circle.js";
import Cube from "./cube.js";


let instance = null;
export default class Experience{
  constructor(){
    // singleton
    if(instance !== null){return instance};
    instance = this;
    console.log('experience created');

    // physics
    this.physicsEngine = Matter.Engine.create();
    this.physicsWorld = this.physicsEngine.world;
    this.physicsGravity = this.physicsEngine.gravity;
    this.physicsGravity.x = 0; this.physicsGravity.y = 0;

    // references
    this.canvas = document.getElementById('canvas');
    this.origin = {x: this.canvas.clientWidth/2, y: this.canvas.clientHeight};
    this.ctx = this.canvas.getContext('2d');
    this.objects = [];

    // create box
    const topBox = new Cube(200, 100, 150, 10, true); this.objects.push(topBox);
    const botBox = new Cube(200, 250, 150, 10, true); this.objects.push(botBox);
    const leftBox = new Cube(125, 175, 10, 150, true); this.objects.push(leftBox);
    const rightBox = new Cube(275, 175, 10, 150, true); this.objects.push(rightBox);
     
    const ground = new Cube(275, 500, 1000, 150, true); this.objects.push(ground);

    const circle = new Circle(150, 150, 5);this.objects.push(circle);
     
    this.startRender();
     
    window.addEventListener('keydown', (e)=>{
      if(e.key === "ArrowUp"){
        this.physicsGravity.y -= 0.1;
      }
      if(e.key === "ArrowDown"){
        this.physicsGravity.y += 0.1;
      }
      if(e.key === "ArrowLeft"){
        this.physicsGravity.x -= 0.1;
      }
      if(e.key === "ArrowRight"){
        this.physicsGravity.x += 0.1;
      }
    });
     
    this.canvas.addEventListener('mousemove', (e)=>{
      const totalX = this.canvas.clientWidth;
      const totalY = this.canvas.clientHeight;

      const offset = {
        x: ((e.offsetX/totalX) - 0.5)*2,
        y: ((e.offsetY/totalY) - 0.5)*2
      }

      this.physicsGravity.x = offset.x
      this.physicsGravity.y = offset.y
    })
     
    //start physic engine
    Matter.Runner.run(this.physicsEngine);
  }

  startRender(){
    setInterval(this.draw.bind(this), 1000/60);
  }
   
  draw(){
    // clear screen
    this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight)

    // update physics 
    // Matter.Engine.update(this.physicsEngine);
     
    // draw object;
    this.objects.forEach((obj)=>{
      obj.draw();
    })
  }
   
}