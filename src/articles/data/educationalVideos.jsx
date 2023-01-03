import { getAssetUrl } from "../../assetUrl";

export default function EducationalVideos(){
    return(
        <div className="article">
            <img className="imageFit" src={getAssetUrl('EducationalVideos_Hero.png')} alt="" />
            <h1>Educational Videos</h1>
            <div>These are my personal creative outlets for my curious rabbit holes and all around experimentation with different techniques. Each born out of a topic I was obsesed with and a playground to mix art and code together. And with 5-digit views on youtube for some of them, It does bring me joy to do them. </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bcxyOXj2tWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oCsgTrGLDiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zA9htZQN3SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Find more on youtube channel, and like and subscribe while your there :)</div>
            <a className="linkOut interactive" href="https://www.youtube.com/channel/UCdohjIkQq2PtvAvJOaMxK7w">My Youtube Channel</a>
        </div>
    )
}