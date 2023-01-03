import TestArticle from './testArticleComponent';

import { getAssetUrl } from '../../assetUrl';

import InteractiveNarrative from './interactiveNarrative';
import NinjaNFTs from './ninjaNFTs';
import BurgerKing from './BurgerKing';
import Cosmonaut from './cosmonaut';
import EducationalVideos from './educationalVideos';
import InteractiveArticles from './interactiveArticles';
import ARCNY from './ARCNY';
import SecuritySimulator from './SecuritySimulator';
import GenesisExperience from './genesisExperience';
import ImmersivelyExperience from './immersivelyExperience';

export const ProjectsData = [
    {
        thumbnailUrl: "https://genesismotiontech.com/interactive-video/assets/images/flowChartRoot.png",
        title: "Interactive Narrative",
        subtitle: "",
        description: "A choose your own adventure web film.",
        component: InteractiveNarrative
    },
    {
        thumbnailUrl: getAssetUrl('NinjaNFTs_Hero.png'),
        title: "Ninja NFTs",
        subtitle: "",
        description: "A ~5000 NFT image collection",
        component: NinjaNFTs
    },
    {
        thumbnailUrl: getAssetUrl('CNY_Hero.png'),
        title: "Chinese New Year AR Greeting Card",
        subtitle: "",
        description: "A unique way to wish your loved ones a happy chinese new year.",
        component: ARCNY
    },
    {
        thumbnailUrl: getAssetUrl('BurgerKing_Hero.png'),
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
        thumbnailUrl: getAssetUrl('EducationalVideos_Hero.png'),
        title: "Educational Videos",
        subtitle: "",
        description: "Animated video explainers of my curiosities",
        component: EducationalVideos
    },
    {
        thumbnailUrl: getAssetUrl('InteractiveArticles_Hero.png'),
        title: "Interactive Articles",
        subtitle: "",
        description: "Interactive and animated web articles",
        component: InteractiveArticles
    },
    {
        thumbnailUrl: getAssetUrl('SecuritySimulator_Hero.png'),
        title: "Ktree Security Protocol Simulator",
        subtitle: "",
        description: "A mobile game app to help test security protocols",
        component: SecuritySimulator
    },
]

export const ExperienceData = [
    {
        thumbnailUrl: getAssetUrl('Genesis_Hero.png'),
        title: "Technical Director",
        subtitle: "At Genesis Motion Tech",
        description: "Empowering a design studio's expansion into web and blockchain/NFTs",
        component: GenesisExperience
    },
    {
        thumbnailUrl: getAssetUrl('Immersively_Hero.png'),
        title: "Technical Artist",
        subtitle: "At Immersively",
        description: "Coordinated between developers and artists to solve unique CG problems in Unity.",
        component: ImmersivelyExperience
    },
]