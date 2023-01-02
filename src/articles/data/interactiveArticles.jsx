import { getAssetUrl } from "../../assetUrl";

export default function InteractiveArticles(){
    return(
        <div className="article">
            <img className="imageFit" src={getAssetUrl('articles/data/assets/InteractiveArticles_Hero.png')} alt="" />
            <h1>Interactive Articles</h1>
            <div>A little evolution of my educational videos, I decided to add my web-development skills to the mix. Creating interactive and educational articles similar to the new york times interactive articles. </div>
            <div>I used some of my videos as the main content and ported them over in an article format</div>
            <h3>How Vernier Calipers Work</h3>
            <img className="imageFit" src={getAssetUrl('articles/data/assets/InteractiveArticles_Calipers.gif')} alt="" />
            <a className="linkOut interactive" href="https://elbert-git.github.io/VernierCalipers/">Check it out here!</a>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yDxxQvKMeQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>How QR Codes Work</h3>
            <img className="imageFit" src={getAssetUrl('articles/data/assets/InteractiveArticles_QR.gif')} alt="" />
            <a className="linkOut interactive" href="https://elbert-git.github.io/Project_QR/">Check it out here!</a>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qIoKCP6iQxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>This is something I would like to explore more in the future</div>
        </div>
    )
}