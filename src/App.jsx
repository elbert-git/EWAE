import Header from './Header'
import Hero from './heroComponent/Hero'
import MainParagraph from './mainParagraph'
import ArticleRoot from './articles/articlesRoot'

export default function App(){
    return(
        <div className="rootContainerParent">
            <div className="rootContainer debugRedLine">
                <Header></Header>
                <Hero></Hero>
                <MainParagraph></MainParagraph>
                <ArticleRoot></ArticleRoot>
            </div>
        </div>
    )
}