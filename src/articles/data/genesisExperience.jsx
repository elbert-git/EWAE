import { getAssetUrl } from "../../assetUrl";

export default function GenesisExperience(){
    return(
        <div className="article">
            <img className="imageFit" src={getAssetUrl('articles/data/assets/Genesis_Hero.jpg')} alt="" />
            <h1>Empowering a design studio's expansion into web and blockchain/NFTs</h1>
            <div>Was brought in to enable the studio to expand into tech related projects. Mainly web-development and Web3.0. This includes equipping the creatives with the technical knowledge to handle web projects and coordinating with the business developers to help rope in clients. </div>
            <h3>Preparing the studio</h3>
            <img className="imageFit" src={getAssetUrl('articles/data/assets/Genesis_Diagram.jpg')} alt="" />
            <div>In the beginning, it was mostly a lot of meetings to prepare the company for their expansions. Lots of diagrams, documents and spec-sheets to create to equip the team for development. </div>
            <h3>Building Demos</h3>
            <div>Was also responsible for initating and developing demos to illustrate use-cases of new technologies for business. </div>
            <img className="imageFit" src={getAssetUrl('articles/data/assets/Genesis_BoatAR.gif')} alt="" />
            <img className="imageFit" src={getAssetUrl('articles/data/assets/Genesis_Retail.gif')} alt="" />
        </div>
    )
}