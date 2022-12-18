import Experience from "./experience.js"

export default class Cube{
  constructor(x, y, width, height, isStatic){
    // variables
    this.height = height;
    this.width = width
    this.scaleOffset = 0.5;

    //references
    this.body = Matter.Bodies.rectangle(x, y, width, height, {isStatic: isStatic, inertia: Infinity});
     
    // states
    this.position = {x: x, y: y};
     
    //references 
    this.experience = new Experience();
    this.ctx = this.experience.ctx;
     
    // add body to world
    Matter.Composite.add(this.experience.physicsWorld, [this.body]);
  }
   
  draw(){
    this.position = {x: this.body.position.x, y: this.body.position.y}
    // move to start vertex
    this.ctx.beginPath();
    this.ctx.moveTo(this.position.x-(this.width*this.scaleOffset), this.position.y-(this.height*this.scaleOffset))
    // draw to each vertex
    this.ctx.lineTo(this.position.x+(this.width*this.scaleOffset), this.position.y-(this.height*this.scaleOffset));
    this.ctx.lineTo(this.position.x+(this.width*this.scaleOffset), this.position.y+(this.height*this.scaleOffset));
    this.ctx.lineTo(this.position.x-(this.width*this.scaleOffset), this.position.y+(this.height*this.scaleOffset));
    this.ctx.lineTo(this.position.x-(this.width*this.scaleOffset), this.position.y-(this.height*this.scaleOffset));
    this.ctx.stroke();
  }
}