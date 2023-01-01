import TestArticle from './testArticleComponent';

import { getAssetUrl } from '../../assetUrl';

import InteractiveNarrative from './interactiveNarrative';
import NinjaNFTs from './ninjaNFTs';
import BurgerKing from './BurgerKing';
import Cosmonaut from './cosmonaut';
import EducationalVideos from './educationalVideos';


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
        thumbnailUrl: getAssetUrl('articles/data/assets/BurgerKing_Hero.png'),
        title: "Burger King CheeseMas",
        subtitle: "",
        description: "An animated teaser of Burger King's winter metaverse and christmas burger",
        component: BurgerKing
    },
    {
        thumbnailUrl: "https://img.itch.zone/aW1nLzM4MDM0MzUuanBlZw==/original/W21o%2Bk.jpeg",
        title: "The Last Cosmonaut",
        subtitle: "",
        description: "A first-person horror game",
        component: Cosmonaut
    },
    {
        thumbnailUrl: getAssetUrl('articles/data/assets/EducationalVideos_Hero.png'),
        title: "Educational Videos",
        subtitle: "",
        description: "Animated video explainers of my curiosities",
        component: EducationalVideos
    },
]