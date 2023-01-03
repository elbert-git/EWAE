import { getAssetUrl } from "../../assetUrl";

export default function SecuritySimulator(){
    return(
        <div className="article">
            <img className="imageFit" src={getAssetUrl('SecuritySimulator_Hero.png')} alt="" />
            <h1>Ktree Security Protocol Simulation</h1>
            <div>Ktree, a security training company, approached Immersively to create a security protocol testing app.  So we created a simple mobile point and click narrative game for them. </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ooij8wo9u2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Handled the development of this app in collaboration with another 3d artist to complete this project</div>
            <div>This was a replacement of creating full role-play drills for k-tree. Reducing a whole day event to an app download</div>
        </div>
    )
}