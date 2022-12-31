export default function JobBadge(prop){
    const data = prop.data;

    return(
        <div className="jobBadge">
            <img src="" alt="" />
            <h4>{data.position}</h4>
            <div>At {data.company}</div>
            <div>{data.description}</div>
        </div>
    )
}