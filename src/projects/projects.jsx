import ProjectBadge from "./projectBadge"

console.log('ran once')
const datas = [
    {
        thumbnail: "",
        title: "Title",
        description: "Desc desc dsc ",
    }
]

export default function Projects(){
    return(
        <div className="projects debugRedLine fillWidth">
            <h3 className="textCenter">Projects</h3>
            <div className="contentHolder">
                <ProjectBadge data={datas[0]}></ProjectBadge>
                <ProjectBadge data={datas[0]}></ProjectBadge>
                <ProjectBadge data={datas[0]}></ProjectBadge>
                <ProjectBadge data={datas[0]}></ProjectBadge>
                <ProjectBadge data={datas[0]}></ProjectBadge>
                <ProjectBadge data={datas[0]}></ProjectBadge>
            </div>
        </div>
    )
}