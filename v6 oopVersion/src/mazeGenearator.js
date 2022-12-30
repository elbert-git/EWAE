export default function GenerateMaze(width, height){
    // generate plain maze
    const mazeLength = width;
    const mazeHeight = height;
    function createMazeData(){
        return {
            walls: [true, true, true, true],
            position: {xIndex: null, yIndex:null},
            isLetter: false
        }
    }; 
    const mazeDataArray = [];
    for (let xIndex = 0; xIndex < mazeLength; xIndex++) {
        const column = [];
        for (let yIndex = 0; yIndex < mazeHeight; yIndex++) {
            const cell = createMazeData();
            cell.position = {xIndex: xIndex, yIndex: yIndex};
            column.push(cell);
        }
        mazeDataArray.push(column);
    }

    // todo insert letters
     
    // maze generation variables
    let currentAddress = {xIndex:0, yIndex: 0};
    const currentChain = [];
    const visitedStack = [];
    let isBacktracking = false;
    // maze generation helper functions
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
    // start maze loop
    const generateMazeLoop = ()=>{
        //record of current position
        if(!isBacktracking){
            visitedStack.push({...currentAddress});
        }
        currentChain.push({...currentAddress});

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
            generateMazeLoop();
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
                generateMazeLoop();
            }else{
                console.log('maze completed');
                removeDoubleWalls();
            }
        }
    }
    generateMazeLoop();

    return mazeDataArray;
}