import { getAssetUrl } from "../../assetUrl";

export default function BurgerKing(){
    return(
        <div className="article">
            <img className="imageFit" src={getAssetUrl('articles/data/assets/BurgerKing_Hero.png')} alt="" />
            <h1>Burger King Cheesemas</h1>
            <div>Burger-King wanted to create an animated teaser for their metaverse project. A 15 second animation. Played the role of a technical artist and rigger in this project</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OGXIdLp5w_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}