import { getAssetUrl } from "../../assetUrl";

export default function ImmersivelyExperience (){
    return(
        <div className="article">
            <img className="imageFit" src={getAssetUrl('Genesis_Hero.jpg')} alt="" />
            <h1>Coordinated between developers and artists to solve unique CG solutions in Unity. </h1>
            <div>Was initially brought in as 3D artist but just naturally transitioned into the technical artist role. Responsible for solving unique 3D rendering problems with 3D rigging and animation, along with coordinating between developers and artists.</div>
            <h3>Procedural Pressure Wounds</h3>
            <div>Immersively was awarded a grant to develop an app to help render pressure wounds. </div>
            <div>Pressure wounds are complicated wounds with many variations. Correct diagnoses by nurses of these variations are essential to treat them. The issue comes from the difficulty in acquiring references due to the wounds being in different sensitive locations of the patient. So Immersively created a program to visualise all the different variations.</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VB15SwPRdyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>My mission was to create a pipeline to render all the different variations without creating a specific asset for each one. The solution I have arrived in is using a shader to composite different textures with height-maps to displace the vertices of the model. All layers and the strengths of each displacement are exposed parameters in the shaders for the developers to tweak. </div>
            <div>This was a giant reduction of work as it replaces creating a specific asset for each permutation of the wound.</div>
            <h3>Unity Character Customisation</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nqIYerj_Y2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Immersively was tasked to create a 3D character customisation system in unity. </div>
            <div>A pretty complicated technical challenge to tackle even today. To creating essentially a rig that can dynamically swap out the shape of a character without producing seams and still fit in with the animation pipeline.</div>
            <div>The main solution was mainly a combination of blendshapes and usual bone rigging. With the definition of the muscles being drawn by a normal map fading in and out. </div>
            <div>Played the role of the rigger and technical artist coordinating with the artists and developers</div>
        </div>
    )
}