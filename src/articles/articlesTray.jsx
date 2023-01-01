import ArticleBadge from "./articleBadge"


export default function ArticleTray(prop){
    return(
        <div className="articleTray">
            <h3 className="textCenter">{prop.title}</h3>
            <div className="articleBadgeHolder">
                {prop.data.map((artData)=>{
                    return (<ArticleBadge
                    data={artData}
                    setSlideFunc={prop.setSlideFunc}
                    setArticleFunc={prop.setArticleFunc}
                    key={Math.random()}
                    ></ArticleBadge>)
                })}
            </div>
        </div>
    )
}