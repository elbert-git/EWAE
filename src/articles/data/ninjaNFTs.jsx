import { getAssetUrl } from "../../assetUrl";

export default function NinjaNFTs(){
    return(
        <div className="article">
            <img className="imageFit" src={getAssetUrl('NinjaNFTs_Hero.png')} alt="" />
            <h1>Ninja NFTs</h1>
            <div>When NFTs was the hot thing in town. It was something Genesis motion tech wanted to branch out into. So wrangled an artist and me to figure it all out. </div>
            <a className="linkOut interactive" href="https://agents-in-the-dark.github.io/in-the-dark/">Mint Here!</a>
            <h3>The Asset Creation</h3>
            <div>We decided to do the classic layer swaps NFTs with ninjas. A cool motif the company really has an affinity with. The artist draw a ninja in a cool pose varying the colors and props separating them into layers</div>
            <div>Using some simple node scripts and a npm package called jimp to shuffle and composite all the different layers together.</div>
            <img className="imageFit" src={getAssetUrl('NinjaNFTs_Gif.gif')} alt="" />
            <h3>Blockchain Development</h3>
            <div>After much research and understanding how the Ethereum smart contract worked. it was surprisingly straightforward to implement. It effectively is a public instance of a class online somewhere. Reducing ethereum's blockchain into an expensive and slow but secure database</div>
            <a className="linkOut interactive" href="https://opensea.io/collection/agentsofdarkness">Check it out in OpenSea!</a>
            <h3>The Project's Result</h3>
            <div>With some amazing social media pushes from my boss, the smart contract earned ~SG$3000.
While we all didn't become overnight millionaires this was a way better result than what we thought we could earn from a simple project like this.</div>
        </div>
    )
}