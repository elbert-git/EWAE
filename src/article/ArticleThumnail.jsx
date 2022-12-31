const defaultThumbnail = "https://taxreform.dof.gov.ph/wp-content/uploads/2019/07/no-thumbnail-medium.png"

export default function ArticleThumbnail(prop){
    return(
        <div className="articleThumbnail interactive">
            <img src={defaultThumbnail} alt={defaultThumbnail} />
            <h4>{prop.title}</h4>
            <div>{prop.subtitle}</div>
            <div>{prop.description}</div>
        </div>
    )
}