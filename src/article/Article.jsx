import ArticleFrame from "./ArticleFrame"
import ArticleThumbnail from "./ArticleThumnail"
import { tempArticleData } from "./articleData"

export default function Articles(prop){
    console.log(prop.data);
    return(
        <div className="articles fillWidth">
            <h3 className="textCenter">{prop.title}</h3>
            <div className="thumbnailTray">
                {prop.data.map((thumbnail)=>{
                    return (<ArticleThumbnail
                    title={thumbnail.title}
                    subtitle={thumbnail.subtitle}
                    description={thumbnail.description}
                    component={thumbnail.component}
                    key={Math.random()}
                    ></ArticleThumbnail>)
                })}
                {/*layer map every prop.thumbnailDatas to ArticleThumbnail component*/}
            </div>
            <ArticleFrame data={null} slide={false}></ArticleFrame>
        </div>
    )
}