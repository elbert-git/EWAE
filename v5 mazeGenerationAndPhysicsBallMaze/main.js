/* todo
>>>start matter engine
for create static body for every wall
create circle
create function to visualise ball
run the engine
on every engine loop visualise the ball
---
>make this all object oriented
>>>create 3d version of this maze
*/

import CanvasMazeVisualiser from "./canvasVisualiser.js";
// init maze visualiser
const cellWidth = 20;
const viz = new CanvasMazeVisualiser(cellWidth);


// * ---------- create cell data
const createCellData = (x, y)=>{
    const cellData = {
        walls: [true, true, true, true],
        isLetter: false,
        position: {xIndex:x, yIndex:y}
    }
    return cellData;
};

// * ---------- create maze
const mazeLength = 10; const mazeHeight = 5;
const mazeDataArray = [];
for (let xIndex = 0; xIndex < mazeLength; xIndex++) {
   const column = [];    
   for (let yIndex = 0; yIndex < mazeHeight; yIndex++) {
        column.push(createCellData(xIndex, yIndex));
   }
   mazeDataArray.push(column)
}
 
// * ---------- create maze loop
//loop mini functions
//actual loop
const loopTime = 0.001;
let currentAddress = {xIndex:0, yIndex: 0};
const currentChain = [];
const visitedStack = [];
let isBacktracking = false;
const removeDoubleWalls = ()=>{
    for (let xIndex = 0; xIndex < mazeDataArray.length; xIndex++) {
        const column = mazeDataArray[xIndex]
        for (let yIndex = 0; yIndex < column.length; yIndex++) {
            // current Address
            const currentAddress = {...column[yIndex].position}
            // get all neighbours
            const allNeighbours = [
                {xIndex: currentAddress.xIndex, yIndex: currentAddress.yIndex -1, direction: "up"},
                {xIndex: currentAddress.xIndex +1, yIndex: currentAddress.yIndex, direction: "right"},
                {xIndex: currentAddress.xIndex, yIndex: currentAddress.yIndex +1, direction: "down"},
                {xIndex: currentAddress.xIndex -1, yIndex: currentAddress.yIndex, direction: "left"},
            ]
            // get valid neighours
            const validNeighbours = []
            for (let index = 0; index < allNeighbours.length; index++) {
                let isValid = true
                const currNeighbour = allNeighbours[index];
                if(currNeighbour.xIndex < 0 || currNeighbour.yIndex < 0){
                    isValid = false;
                }
                if(currNeighbour.xIndex > mazeLength-1 || currNeighbour.yIndex > mazeHeight-1){
                    isValid = false;
                }
                if(isValid){
                    validNeighbours.push({...currNeighbour});
                }
            }
            // for each valid neighbour: remove doubles
            for (let index = 0; index < validNeighbours.length; index++) {
                const currentCell = mazeDataArray[xIndex][yIndex];
                const currentNeighbourAddress = validNeighbours[index]
                const currentDirection = currentNeighbourAddress.direction;
                const currentNeighbour = mazeDataArray[currentNeighbourAddress.xIndex][currentNeighbourAddress.yIndex];
                switch(currentDirection){
                    case "up":
                        if(currentCell.walls[0]){
                            if(currentNeighbour.walls[2]){
                                currentCell.walls[0] = false;
                            }
                        }
                        break;
                    case "right":
                        if(currentCell.walls[1]){
                            if(currentNeighbour.walls[3]){
                                currentCell.walls[1] = false;
                            }
                        }
                        break;
                    case "down":
                        if(currentCell.walls[2]){
                            if(currentNeighbour.walls[0]){
                                currentCell.walls[2] = false;
                            }
                        }
                        break;
                    case "left":
                        if(currentCell.walls[3]){
                            if(currentNeighbour.walls[1]){
                                currentCell.walls[3] = false;
                            }
                        }
                        break;
                    default:
                        console.log("broke at removng doubles")
                }
            }
        }
    }
}
const isInVisitedStack = (address)=>{
    let hasVisited = false;
    for (let index = 0; index < visitedStack.length; index++) {
       if(
           address.xIndex === visitedStack[index].xIndex &&
           address.yIndex === visitedStack[index].yIndex
       ) {
           hasVisited = true;
       }
    }
    return hasVisited;
}
const punchWalls = (cellA, cellB, direction)=>{
    switch(direction){
        case "up":
            cellA.walls[0] = false;
            cellB.walls[2] = false;
            break;
        case "right":
            cellA.walls[1] = false;
            cellB.walls[3] = false;
            break;
        case "down":
            cellA.walls[2] = false;
            cellB.walls[0] = false;
            break;
        case "left":
            cellA.walls[3] = false;
            cellB.walls[1] = false;
            break;
        default:
            break;
    }
}
function startEngine(){
    // get main classes
    const Engine = Matter.Engine;
    const Runner = Matter.Runner;
    const Render = Matter.Render;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;

    // create engine
    const engine = new Engine.create();

    //  create bodies
    for (let xIndex = 0; xIndex < mazeDataArray.length; xIndex++) {
        const column = mazeDataArray[xIndex];
        for (let yIndex = 0; yIndex < column.length; yIndex++) {
            const cell = column[yIndex];
            if(cell.walls[0]){
                const body = Bodies.rectangle(
                    cell.position.xIndex * cellWidth + (cellWidth/2),
                    cell.position.yIndex * cellWidth,
                    cellWidth,
                    4,
                    {isStatic: true}
                )
                Composite.add(engine.world, [body]);
            }
            if(cell.walls[1]){
                const body = Bodies.rectangle(
                    cell.position.xIndex * cellWidth + cellWidth,
                    cell.position.yIndex * cellWidth + (cellWidth/2),
                    4,
                    cellWidth,
                    {isStatic: true}
                )
                Composite.add(engine.world, [body]);
            }
            if(cell.walls[2]){
                const body = Bodies.rectangle(
                    cell.position.xIndex * cellWidth + (cellWidth/2),
                    cell.position.yIndex * cellWidth + cellWidth,
                    cellWidth,
                    4,
                    {isStatic: true}
                )
                Composite.add(engine.world, [body]);
            }
            if(cell.walls[3]){
                const body = Bodies.rectangle(
                    cell.position.xIndex * cellWidth,
                    cell.position.yIndex * cellWidth + (cellWidth/2),
                    4,
                    cellWidth,
                    {isStatic: true}
                )
                Composite.add(engine.world, [body]);
            }
        }
    }
    // create circle
    const circleBody = Bodies.circle(10,10, 3);
    circleBody.restitution = 0.3
    Composite.add(engine.world, [circleBody]);

    //add gravity control
    window.addEventListener('keydown', (e)=>{
        const grav = 0.3;
        if(e.key === 'ArrowUp'){
            e.preventDefault();
            engine.gravity.x = 0;
            engine.gravity.y = -grav;
        }
        if(e.key === 'ArrowRight'){
            console.log('ww');
            e.preventDefault();
            engine.gravity.x = grav;
            engine.gravity.y = 0;
        }
        if(e.key === 'ArrowDown'){
            e.preventDefault();
            engine.gravity.x = 0;
            engine.gravity.y = grav;
        }
        if(e.key === 'ArrowLeft'){
            console.log('ww');
            e.preventDefault();
            engine.gravity.x = -grav;
            engine.gravity.y = 0;
        }
    });

    //create engine loop and start
    function engineLoop(){
        // update engine
        Engine.update(engine)
        // call visualiser to draw        
        viz.engineViz(mazeDataArray, circleBody);
        // call next loop
        setTimeout(engineLoop, 1000/60)
    }
    engineLoop();
    
    //add renderer
    const render = Render.create({
        element: document.body,
        engine: engine
    })
    Render.run(render)
}
const generateMazeLoop = ()=>{
    //record of current position
    if(!isBacktracking){
        visitedStack.push({...currentAddress});
    }
    currentChain.push({...currentAddress});
     
    //visualis maze
    viz.clear();
    //highlight
    visitedStack.forEach((addr)=>{ // highlight visited
        viz.highlightCell(mazeDataArray[addr.xIndex][addr.yIndex], 'green');
    })
    viz.highlightCell(mazeDataArray[currentAddress.xIndex][currentAddress.yIndex], 'red');
    //outline
    viz.drawWalls(mazeDataArray); 

    //get all possible addresses
    const possibleAddresses = [
        {xIndex: currentAddress.xIndex, yIndex: currentAddress.yIndex -1, direction:"up"},
        {xIndex: currentAddress.xIndex+1, yIndex: currentAddress.yIndex, direction:"right"},
        {xIndex: currentAddress.xIndex, yIndex: currentAddress.yIndex +1, direction:"down"},
        {xIndex: currentAddress.xIndex-1, yIndex: currentAddress.yIndex, direction:"left"},
    ]
    //only get valid addresses
    const validAddresses = [];
    for (let moveIndex = 0; moveIndex < possibleAddresses.length; moveIndex++) {
        let isValid = true;
        const currMove = possibleAddresses[moveIndex];
        if(currMove.xIndex < 0 || currMove.yIndex < 0){ //check for negative spaces
            isValid = false
        }
        if(currMove.xIndex > mazeLength -1 || currMove.yIndex > mazeHeight-1){
            isValid = false
        }
        if(isInVisitedStack(currMove)){
            isValid = false
        }
        if(isValid){
            validAddresses.push({...currMove});
        }
    }
     
    // based on valid addresses understand what to do
    if(validAddresses.length > 0){ //valid moves available
        //move forward
        isBacktracking = false;
        // punch walls
        const nextCell = validAddresses[Math.floor(Math.random()*validAddresses.length)]
        punchWalls(
            mazeDataArray[currentAddress.xIndex][currentAddress.yIndex],
            mazeDataArray[nextCell.xIndex][nextCell.yIndex],
            nextCell.direction
        )
        //move cursor to next address
        currentAddress = {...nextCell};
        //start next loop
        setTimeout(generateMazeLoop, loopTime * 1000)
    }else{ //no valid moves
        // move backwards
        isBacktracking = true;
        //pop one cell off the stack
        currentChain.pop();
        const prevCell = currentChain.pop();
        //move cursor backwards
        currentAddress = {...prevCell};
        //start next loop
        if(currentChain.length > 0){
            setTimeout(generateMazeLoop, loopTime * 1000)
        }else{
            console.log('maze completed');
            removeDoubleWalls();
            viz.clear();
            viz.drawWalls(mazeDataArray);
            startEngine();
        }
    }
}
generateMazeLoop();







