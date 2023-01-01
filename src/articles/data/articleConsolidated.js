import TestArticle from './testArticleComponent';

import { getAssetUrl } from '../../assetUrl';

import InteractiveNarrative from './interactiveNarrative';
import NinjaNFTs from './ninjaNFTs';


const tempThumb = "http://www.kreilkamp.com/wp-content/uploads/2016/11/thumbnail-placeholder-500x334.jpg"

export const tempData = [
    {
        thumbnailUrl: "https://genesismotiontech.com/interactive-video/assets/images/flowChartRoot.png",
        title: "Interactive Narrative",
        subtitle: "",
        description: "A choose your own adventure web film.",
        component: InteractiveNarrative
    },
    {
        thumbnailUrl: getAssetUrl('articles/data/assets/NinjaNFTs_Hero.png'),
        title: "Ninja NFTs",
        subtitle: "",
        description: "A ~5000 NFT image collection",
        component: NinjaNFTs
    },
    {
        thumbnailUrl: tempThumb,
        title: "Title",
        subtitle: "Subtitle",
        description: "This is a long description of the article",
        component: TestArticle
    },
    {
        thumbnailUrl: tempThumb,
        title: "Title",
        subtitle: "Subtitle",
        description: "This is a long description of the article",
        component: TestArticle
    },
]