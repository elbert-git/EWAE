import { useState } from "react"
import ArticleTray from "./articlesTray";
import { ProjectsData, ExperienceData } from "./data/articleConsolidated";
import ArticleViewer from "./articleViewer";

export default function ArticleRoot(){
    const [slide, setSlide] = useState(false);
    const [article, setArticle] = useState(null)
     
    return(
        <div className="articleRoot fillWidth">
            <ArticleTray data={ExperienceData} title="Experience" setSlideFunc={setSlide} setArticleFunc={setArticle}></ArticleTray>
            <ArticleTray data={ProjectsData} title="Projects" setSlideFunc={setSlide} setArticleFunc={setArticle}></ArticleTray>
            {/* articleViewer */}
            <ArticleViewer slide={slide} article={article} setSlideFunc={setSlide}></ArticleViewer>
        </div>
    )
}