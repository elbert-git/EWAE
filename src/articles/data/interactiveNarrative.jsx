import { getAssetUrl } from "../../assetUrl";

export default function InteractiveNarrative(){
    return(
        <div className="article">
            <img className="imageFit" src="https://genesismotiontech.com/interactive-video/assets/images/flowChartRoot.png" alt="" />
            <h1>Interactive Narrative</h1>
            <div>Inspired by Netflix's interactive narrative projects like 'bandersnatch'. Genesis wanted to re-create these projects here in Singapore. This project is our showpiece and workflow discovering process. Nailing down the pipeline and developing the required foundations to replicate the interactive medium.</div>
            <img className="imageFit" src={getAssetUrl('InteractiveNarrative_Flowchart.png')} alt="" />
            <div>On top of being coordinating with the film crew producing the film, I was the developer for this project. Had to create a custom video player on the web so that all the current relevant story branches are pre-loaded so you can experience the narrative seamlessly in HD</div>
            <a className="linkOut interactive" href="https:/genesismotiontech.com/interactive-video">Check it out here!</a>
        </div>
    )
}