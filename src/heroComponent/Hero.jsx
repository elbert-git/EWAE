import Experience from './experience/experience'
import { useEffect, useRef } from "react"
import isMobile from './experience/isMobile';

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
            {isMobile() ? <h1 className='textCenter'>CREATIVE DEVELOPER</h1>:""}
            <div className='fillWidth' ref={elCanvasParent}></div>
        </div>
    )
}