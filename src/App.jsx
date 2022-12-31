import Header from './Header'
import Hero from './heroComponent/Hero'
import MainParagraph from './mainParagraph'
import JobExperience from './jobExperience/JobExperience'
import Projects from './projects/projects'
import Articles from './article/Article'

import { tempArticleData } from './article/articleData'

export default function App(){
    return(
        <div className="rootContainerParent">
            <div className="rootContainer debugRedLine">
                <Header></Header>
                <Hero></Hero>
                <MainParagraph></MainParagraph>
                <JobExperience></JobExperience>
                <Projects></Projects>
                <Articles
                title="Article Test"
                data={tempArticleData}
                ></Articles>
            </div>
        </div>
    )
}