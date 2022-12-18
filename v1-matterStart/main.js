console.log('dasf');

// get main classes
const Engine = Matter.Engine; // actual phsyics engine
const Render = Matter.Render; // simple rendering module to visualise
const Runner = Matter.Runner; // a class to update phsycis engine
const Bodies = Matter.Bodies; // creates rigid bodies
const Composite = Matter.Composite; // adds bodies to engine

// create engine
const engine = Engine.create();

// create renderer
const render = Render.create({
  element: document.body,
  engine: engine
});

// create 2 boxes and ground
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic:true });

// add bodies to world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
const runner = Runner.create();

// run the engine
Runner.run(runner, engine);

function physicsTick(){
  // update world
  // render 
}
