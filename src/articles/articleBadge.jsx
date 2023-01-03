export default function ArticleBadge(prop){
    const data = prop.data

    const click = ()=>{
        prop.setArticleFunc(prop.data.component)
        prop.setSlideFunc(true)
    }

    return(
        <div className="articleBadge interactive" onClick={click}>
            <img src={data.thumbnailUrl} alt="" />
            <h4>{data.title}</h4>
            <div className="subtitle">{data.subtitle}</div>
            <div>{data.description}</div>
        </div>
    )
}