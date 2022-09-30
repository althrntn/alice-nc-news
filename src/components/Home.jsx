import { useEffect, useState } from "react"
import { getArticles } from "../utils/api_funcs"
import ArticleCard from "./ArticleCard"

const Home = () => {
    const [topArticles, setTopArticles] = useState([])
const topParams = {sort_by: 'votes'}

useEffect(() => {
    getArticles(topParams).then((results)=> {setTopArticles(results.articles.slice(0,3))})
}, [])

    return (<div className='home'> <h1>Welcome to NC News!</h1>
    <h2> All the best reporting in one place</h2>
    <h3 id='top_stories'>Top stories</h3>
    <ul>
        {topArticles.map((article)=> {
        return (<li className=
            'article_card' key={article.article_id}><ArticleCard article={article}/></li>)
    
    })}
    </ul>
    </div>)
    
}
export default Home