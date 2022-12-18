import Experience from "./experience.js";

export default class Circle{
  constructor(x, y, r){
    this.radius = r;

    this.experience = new Experience();
    this.ctx = this.experience.ctx;

    this.position = {x: x, y:y};
     
    //phsyics
    this.body = Matter.Bodies.circle(x, y, r, {isStatic: false});
    Matter.Composite.add(this.experience.physicsWorld, [this.body]);

     


  }
   
  draw(){
    // sync position
    this.position = {x: this.body.position.x, y: this.body.position.y};

    // draw
    this.ctx.moveTo(this.position.x, this.position.y);
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
    this.ctx.stroke();
  }
}