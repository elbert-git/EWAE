export default class Input{
    constructor(element){
        //variables 
        this.inputLerpFactor = 0.3
        //references
        this.elCanvasParent = element
        //states
        this.rawInputVector = {x:0, y:0};
        this.lerpedInputVector = {x:0, y:0};
        //
        this.currentJSCenter = {x:0, y:0};
        this.currentMousePosition = {x:0, y:0};
        //
        this.pointerDown = false;

         
        this.initiateEventListeners();
    }

    update(){
        //handle raw input vector
        if(this.pointerDown){ // if pointer is down recalculate raw input vector
            const direction = this.findDirectionalVector(this.currentJSCenter, this.currentMousePosition)
            this.rawInputVector = this.normalizeVector(direction)

        }else{ // else return raw input to zero
            this.rawInputVector = {x: 0, y: 0};
        }
         
        //prevent nans
        if(isNaN(this.rawInputVector.x) || isNaN(this.rawInputVector.y)){
            this.rawInputVector = {x:0, y:0};
        }
         
        //lerp input vector to raw input vector
        this.lerpedInputVector = this.lerpVectors(this.lerpedInputVector, this.rawInputVector, this.inputLerpFactor)
    }
     
     
    initiateEventListeners(){
        //listen for if pointer is up or down
        this.elCanvasParent.addEventListener('pointerdown', (e)=>{
            //update pointer status
            this.pointerDown = true;

            //record new starting position
            this.currentJSCenter = {x: e.clientX, y: e.clientY};
        })
        window.addEventListener('pointerup', (e)=>{
            //update pointer status
            this.pointerDown = false
        })
        //always update mous position
        window.addEventListener('pointermove', (e)=>{
            this.currentMousePosition = {x: e.clientX, y: e.clientY};
        })
         
        // prevent touch from scrolling
        this.elCanvasParent.addEventListener('touchmove', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            return false
        })
    }
     
    // utility functions
    normalizeVector(object){
        const magnitude = Math.sqrt(
            (object.x*object.x) + (object.y*object.y)
        )
        return {
            x: object.x/magnitude,
            y: object.y/magnitude
        }
    }
    findDirectionalVector(from, to){
        return {
            x: to.x - from.x,
            y: to.y - from.y
        }
    }
    lerp (start, end, amt){
        return (1-amt)*start+amt*end
    }
    lerpVectors(from, to, factor){
        return {
            x: this.lerp(from.x, to.x, factor),
            y: this.lerp(from.y, to.y, factor),
        }
    }
}