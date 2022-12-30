// * ------------- main variables
const cellLength = 20;
const mazeLength = 20; const mazeHeight = 30;
const letterWidth = 3; const letterHeight = 3;
const letterMargin = 1;
const mazeData = [];

// * ------------- cell data creation creation stuff
function createCellInstance(){
    const cell = {
        position: {xIndex: null, yIndex: null},
        isLetter: false
    }
    return cell
}
for (let xIndex = 0; xIndex < mazeLength; xIndex++) {
    const column = []
    for (let yIndex = 0; yIndex < mazeHeight; yIndex++) {
        const cell = createCellInstance();
        cell.position.xIndex = xIndex;
        cell.position.yIndex = yIndex;
        column.push(cell)
    }
    mazeData.push(column);
}


// * ------------- canvas setup
const elCanvas = document.getElementById('canvas');
elCanvas.width = 500; elCanvas.height = 500;
const ctx = elCanvas.getContext('2d');
function clearCanvas(){
    ctx.fillStyle = "white";
    ctx.moveTo(0,0);
    ctx.rect(0,0,elCanvas.clientWidth, elCanvas.clientHeight);
    ctx.fill()
}
function highlightCell(cell, color){
    ctx.fillStyle = color;
    ctx.moveTo(cell.position.xIndex * cellLength, cell.position.yIndex * cellLength);
    ctx.beginPath();
    ctx.rect(cell.position.xIndex * cellLength, cell.position.yIndex * cellLength, cellLength, cellLength);
    ctx.fill();
}
function outlineCell(cell){
    ctx.moveTo(cell.position.xIndex * cellLength, cell.position.yIndex * cellLength);
    ctx.beginPath();
    ctx.rect(cell.position.xIndex * cellLength, cell.position.yIndex * cellLength, cellLength, cellLength);
    ctx.stroke();
}
function drawWalls(){
    for (let xIndex = 0; xIndex < mazeData.length; xIndex++) {
        const column = mazeData[xIndex];
        for (let yIndex = 0; yIndex < column.length; yIndex++) {
            const cell = column[yIndex];
            outlineCell(mazeData[xIndex][yIndex]);
        }
    }
}
function shadeIsletter(){
    for (let xIndex = 0; xIndex < mazeData.length; xIndex++) {
        const column = mazeData[xIndex];
        for (let yIndex = 0; yIndex < column.length; yIndex++) {
            const cell = column[yIndex];
            if(cell.isLetter){
                highlightCell(cell, "green");
            }
        }
    }
}
function drawMaze(){
    clearCanvas();
    shadeIsletter();
    drawWalls();
}


// * ------------- imprinting a single letter
const letterA =[
    [true, true, true],
    [true, false, true],
    [true, false, true],
]
const letterB =[
    [true, true, true],
    [true, false, true],
    [true, true, true],
]
const letterC =[
    [true, true, true],
    [true, false, false],
    [true, true, true],
]

function imprintLetter(startX, startY, pattern){
    for (let yIndex = 0; yIndex < pattern.length; yIndex++) {
        const row = pattern[yIndex];
        for (let xIndex = 0; xIndex < row.length; xIndex++) {
            const cellImprint = row[xIndex];
            if(cellImprint){
                //get cell to imprint
                mazeData[xIndex + startX][yIndex + startY].isLetter = true
            }
        }
    }
}

// * ------------- imprinting a line
const arrayOfLetters = [letterA, letterB, letterC];

function imprintLine(leftOffset, lineOffset, arrayOfLetters){
    for (let letterIndex = 0; letterIndex < arrayOfLetters.length; letterIndex++) {
        // x position = letterMargin + offset + letterIndex * letterWidth
        const startingXPosition = leftOffset + (letterIndex * letterWidth) + (letterMargin * letterIndex);
        const startingYPosition = lineOffset;
        const letterToImprint = arrayOfLetters[letterIndex]
        imprintLetter(startingXPosition, startingYPosition, letterToImprint);
    }
}
imprintLine(3,2,arrayOfLetters);
 

// todo ------------- imprinting a phrase (multiple lines)
console.log(wordToMazeImprint('the lazy dog'))



// * ------------- visualise
drawMaze();



