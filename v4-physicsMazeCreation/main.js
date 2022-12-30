//*----------------- get elements
const elCanvas = document.getElementById('canvas');
const ctx = elCanvas.getContext('2d');
//properly size Canvas
elCanvas.width = window.innerWidth;
elCanvas.height = window.innerHeight;


//*----------------- create cell prototype
const cellPrototype = {
  walls: [...[true, true, true, true]],
  isLetter: false,
  position: {xIndex:null, yIndex:null}
}
 
//*----------------- create cell array
const cellArray = [];
const cellArrayRows = 50; const cellArrayColumns = 10;
for (let xIndex = 0; xIndex < cellArrayRows ; xIndex++) {
  const row = []
  for (let yIndex = 0; yIndex < cellArrayColumns; yIndex++) {
    const cellInstance = {...cellPrototype}
    cellInstance.walls = Array(4).fill(true);
    cellInstance.position = {xIndex: xIndex, yIndex: yIndex};
    row.push(cellInstance);
  }
  cellArray.push(row);
}

//*----------------- draw cell array
// vars
const cellLength = 30;

//* ----------------- main loop
let currentCell = {xIndex: 0, yIndex: 0}
// visualise maze funcs
const visitedStack = [];
const currentChain = [];
const highlightCell = (cell, color)=>{
  ctx.moveTo(cell.xIndex*cellLength, cell.yIndex*cellLength);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.rect(cell.xIndex*cellLength, cell.yIndex*cellLength, cellLength, cellLength);
  ctx.fill();
}
const outlineCell = (cell)=>{
  // randomy change ctx style
  const cols = ['red', 'blue', 'white'];
  ctx.strokeStyle = cols[Math.floor(Math.random() * cols.length)]
  ctx.lineWidth = Math.floor(Math.random() * 6);
  // ctx.lineWidth = 1;


  const position = cell.position;
  const walls = cell.walls;
  // draw top
  if(walls[0]){
    ctx.beginPath();
    ctx.moveTo(position.xIndex*cellLength, position.yIndex*cellLength);
    ctx.lineTo(position.xIndex*cellLength+cellLength, position.yIndex*cellLength);
    ctx.stroke();
  }
  // draw right
  if(walls[1]){
    ctx.beginPath();
    ctx.moveTo(position.xIndex*cellLength+cellLength, position.yIndex*cellLength);
    ctx.lineTo(position.xIndex*cellLength+cellLength, position.yIndex*cellLength+cellLength);
    ctx.stroke();
  }
  //draw bottom
  if(walls[2]){
    ctx.beginPath();
    ctx.moveTo(position.xIndex*cellLength, position.yIndex*cellLength+cellLength);
    ctx.lineTo(position.xIndex*cellLength+cellLength, position.yIndex*cellLength+cellLength);
    ctx.stroke();
  }
  //draw left
  if(walls[3]){
    ctx.beginPath();
    ctx.moveTo(position.xIndex*cellLength, position.yIndex*cellLength);
    ctx.lineTo(position.xIndex*cellLength, position.yIndex*cellLength+cellLength);
    ctx.stroke();
  }
   
  // revert style
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
}
const visualiseMaze = ()=>{
  // clear screen
  ctx.fillStyle = 'white';
  ctx.moveTo(0, 0);
  ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fill();
  
  // highlight visited stack;
  visitedStack.forEach((cell)=>{
    highlightCell(cell, 'green')
  })
  // highlight current cell
  highlightCell(currentCell, 'red');

  // draw cell walls
  for (let xIndex = 0; xIndex < cellArray.length; xIndex++) {
    const column = cellArray[xIndex]    
    for (let yIndex = 0; yIndex < column.length; yIndex++) {
      const cell = column[yIndex]
      outlineCell(cell);
    }
  }
}
const loopTime = 0.0001;
const hasVisitedBefore = (cell)=>{
  let hasVisited = false;
  for (let index = 0; index < visitedStack.length; index++) {
    if(
      visitedStack[index].xIndex === cell.xIndex &&
      visitedStack[index].yIndex === cell.yIndex
    ){
      hasVisited = true;
      break;
    }
  }
  return hasVisited;
}
const punchWalls = (cellA, cellB)=>{
  let movement = ""
  // is it moving left or right
  const xMovement = cellA.position.xIndex - cellB.position.xIndex;
  // is it moving up or down
  const yMovement = cellA.position.yIndex - cellB.position.yIndex;
  if(xMovement === -1){//moving right
    movement = "right"
  }else if(xMovement === 1){ // moving left
    movement = "left"
  }else if(yMovement === 1){ // moving up
    movement = "up"
  }else if(yMovement === -1){ // moving down
    movement = "down"
  }
   
  switch(movement){
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
      console.log('something broke when punching');
  }
}
const removeDoubles = ()=>{
  console.log('start removing dboules');
  for (let xIndex = 0; xIndex < cellArray.length; xIndex++) {
    for (let yIndex = 0; yIndex < cellArray[xIndex].length; yIndex++) {
      
      const currentCell = cellArray[xIndex][yIndex];
      
      // get valid neigbours
      const validNeibours = []
      const neighbours = [
        {xIndex: xIndex, yIndex: yIndex-1, direction: "up"},
        {xIndex: xIndex+1, yIndex: yIndex, direction: "right"},
        {xIndex: xIndex, yIndex: yIndex+1, direction: "down"},
        {xIndex: xIndex-1, yIndex: yIndex, direction: "left"},
      ]
      for (let index = 0; index < neighbours.length; index++) {
        let isValid = true;
        const cellNeighbour = neighbours[index];
        // check for negative
        if(cellNeighbour.xIndex < 0 || cellNeighbour.yIndex < 0){
          isValid = false
        }
        // check for overflow
        if(cellNeighbour.xIndex > cellArrayColumns-1 || cellNeighbour.yIndex > cellArrayRows-1){
          isValid = false;
        }
        if(isValid){
          validNeibours.push(cellNeighbour);
        }
      }
      
      // remove double walls
      for (let index = 0; index < validNeibours.length; index++) {
        const direction = validNeibours[index].direction;
        console.log('---');
        console.log('current valid length is', validNeibours.length);
        console.log('directions to valid neighbour' ,validNeibours[index]);
        const currentNeighbour = cellArray[validNeibours[index].xIndex][validNeibours[index].yIndex];
        console.log('curent cell is ', currentCell);
        console.log('current neighbour checking is: ', currentNeighbour);
        switch(direction){
          case "up":
            if(currentCell.walls[0]){
              if(currentNeighbour.walls[2]){
                currentNeighbour.walls[2] = false; 
              }
            }
            visualiseMaze();
            break;
          case "right":
            if(currentCell.walls[1]){
              if(currentNeighbour.walls[3]){
                currentNeighbour.walls[3] = false; 
              }
            }
            visualiseMaze();
            break;
          case "down":
            if(currentCell.walls[2]){
              if(currentNeighbour.walls[0]){
                currentNeighbour.walls[0] = false; 
              }
            }
            visualiseMaze();
            break;
          case "left":
            if(currentCell.walls[3]){
              if(currentNeighbour.walls[1]){
                currentNeighbour.walls[1] = false; 
              }
            }
            visualiseMaze();
            break;
          default:
            console.log('broken switch');
        }
      }
    }
  }
}

const mazeLoop = ()=>{
  let isBacktracking = false;
  //* --- record current cell
  if(!isBacktracking){
    visitedStack.push({...currentCell});
  }
  currentChain.push({...currentCell});
  //* --- get valid cells
  const possibleCells = [
    {xIndex: currentCell.xIndex, yIndex: currentCell.yIndex-1},
    {xIndex: currentCell.xIndex+1, yIndex: currentCell.yIndex},
    {xIndex: currentCell.xIndex, yIndex: currentCell.yIndex+1},
    {xIndex: currentCell.xIndex-1, yIndex: currentCell.yIndex},
  ]
  //* --- validate moves
  const validCells = [];
  for (let index = 0; index < possibleCells.length; index++) {
    let isValid = true;
    const cell = possibleCells[index]
    // check for negative
    if(cell.xIndex < 0 || cell.yIndex < 0){
      isValid = false
    }
    // check for overflolw
    if(cell.xIndex >= cellArrayRows || cell.yIndex >= cellArrayColumns){
      isValid = false
    }
    // check for visited stack
    if(hasVisitedBefore(cell)){
      isValid = false
    }
    if(isValid){
      validCells.push(cell);
    }
  }
  //* --- decide how to move
  if(validCells.length > 0){ // valid moves exist so move
    // go forward
    isBacktracking = false
    //prepare move and wall punching
    const nextCell = {...validCells[Math.floor(Math.random() * validCells.length)]} 
    // punch walls
    const cellA = cellArray[currentCell.xIndex][currentCell.yIndex];
    const cellB = cellArray[nextCell.xIndex][nextCell.yIndex];
    punchWalls(cellA, cellB);
    // move current cell
    currentCell = nextCell
    // start next loop
    setTimeout(mazeLoop, loopTime*1000);
  }else{ // no valid moves... start backtracking
    // go backwards
    isBacktracking = true
    // move to previous cell
    currentChain.pop(); // remove current
    const prevCell = currentChain.pop(); // get previous
    currentCell = {...prevCell};
    // check to see if we should start next loop
    if(currentChain.length < 1){ // maze is completed
      console.log('maze completed')  
      removeDoubles();
    }else{ // not complete start another loop
      setTimeout(mazeLoop, loopTime*1000);
    }
  }
  //* --- visualize maze
  visualiseMaze();
}
console.log(cellArray);



 

setTimeout(mazeLoop, loopTime*1000);


 