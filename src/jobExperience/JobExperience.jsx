import JobBadge from "./jobBadge"

const jobData = [
    {
        imgUrl:"",
        position: "Technical Artist",
        company: "Immersively",
        description: "Coordinated between developers and artists to solve unique CG solutions in Unity."
    },
    {
        imgUrl:"",
        position: "Technical Director",
        company: "Genesis Motion Tech",
        description: "Empowering a design studio's exploration into web and blockchain/NFTs"
    }
]

export default function JobExperience(){
    return(
        <div className="jobExperience fillWidth">
            <h3 className="textCenter">Experience</h3>
            <div className="content fillWidth">
                <JobBadge data={jobData[0]}></JobBadge>
                <JobBadge data={jobData[1]}></JobBadge>
            </div>
        </div>
    )
}