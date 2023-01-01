export default function ArticleViewer(prop){
    
    const sliderClass = ()=>{
        return prop.slide ?
        "slider"
        :
        "slider sliderDown"
    }
     
    const slideDown = ()=>{
        prop.setSlideFunc(false);
    }

    const handleOpacity = ()=>{
        return prop.slide?
        "articleViewer flex flexJustifyCenter opacity"
        :
        "articleViewer flex flexJustifyCenter opacity opacityDown"
    }
     
    return(
        <div className={handleOpacity()}>
            <div className={sliderClass()}>
                <button className="returnButton interactive" onClick={slideDown}>Return</button>
                <div className="contentRoot">
                    {prop.article}
                    <div style={{height: "5rem"}}></div>
                </div>
            </div>
        </div>
    )
}