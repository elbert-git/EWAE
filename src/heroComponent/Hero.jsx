import Experience from './experience/experience'
import { useEffect, useRef } from "react"

export default function Hero(){
    //get canvas
    const elCanvasParent = useRef()
    console.log(elCanvasParent.current);

    useEffect(()=>{
        if(elCanvasParent.current){
            console.log('canvas found')
            const exp = new Experience(elCanvasParent.current);
        }
    }, [])

    //render
    return(
        <div className="hero fillWidth">
            <div className='fillWidth' ref={elCanvasParent}></div>
            <div className='fillWidth flex flexJustifyCenter'> test</div>
        </div>
    )
}