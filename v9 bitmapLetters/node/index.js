const Jimp = require('jimp')
const fs = require('fs');

console.clear();

(async function(){
    const imageData = await Jimp.read('./letterNoWallsMask.png');
    const imageHeight = imageData.bitmap.height;
    const imageWidth = imageData.bitmap.width;
     
    const imageArray = [];
    for (let yIndex = 0; yIndex < imageHeight; yIndex++) {
        const row = []
        for (let xIndex = 0; xIndex < imageWidth; xIndex++) {
            const pixelHex = imageData.getPixelColor(xIndex, yIndex);
            const pixelRed = Jimp.intToRGBA(pixelHex).r;
            if(pixelRed === 255){
                row.push('_');
            }else{
                row.push('#')
            }
        }
        imageArray.push(row)
        }
    
    const finalObject = {
        data: imageArray
    }
     
    await fs.writeFile('./letterDataNoWalls.json', JSON.stringify(finalObject), ()=>{});

})()
