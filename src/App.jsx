import Header from './Header'
import Hero from './heroComponent/Hero'
import MainParagraph from './mainParagraph'
import ArticleRoot from './articles/articlesRoot'
import Contact from './footer'

export default function App(){
    return(
        <div className="rootContainerParent">
            <div className="rootContainer">
                <Header></Header>
                <Hero></Hero>
                <MainParagraph></MainParagraph>
                <ArticleRoot></ArticleRoot>
            </div>
        </div>
    )
}