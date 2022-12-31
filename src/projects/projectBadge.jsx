export default function ProjectBadge(prop){
    const data = prop.data
    return(
        <div className="projectBadge">
            <img src={data.thumbnail} alt="" />
            <h4 className="title">{data.title}</h4>
            <div className="description">{data.description}</div>
        </div>
    )
}