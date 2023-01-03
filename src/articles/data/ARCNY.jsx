import { getAssetUrl } from "../../assetUrl";

export default function ARCNY(){
    return(
        <div className="article">
            <img className="imageFit" src={getAssetUrl('CNY_Hero.png')} alt="" />
            <h1>Chinese New Year AR Greetting Card</h1>
            <div>In Immersively, I ended being the main person to produce animated greeting cards for each holiday for the company to send out to their partners</div>
            <img className="imageFit" src={getAssetUrl('CNY_gif1.gif')} alt="" />
            <img className="imageFit" src={getAssetUrl('CNY_gif2.gif')} alt="" />
            <div>For Chinese New Year 2021, We decided to up the ante because the company was recently acquired by another company. So we gave them a bit of a special Web-AR experience. An 3D AR tiger wishing you happy new year</div>
            <img className="imageFit" src={getAssetUrl('CNY_playthrough.gif')} alt="" />
            <div>Played the role of a developer and rigger/animator for this project. It was a delightfully memorable as it brought a lot giggles in the for colleagues and their loved ones Especially in my family. probably the only time they understood what I was doing for my job</div>
        </div>
    )
}