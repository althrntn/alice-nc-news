
import { useEffect, useState } from "react"
import {getArticles} from '../utils/api_funcs'
import ArticleCard from "./ArticleCard"

const Articles = () =>{
    const search = window.location.search;
    const topicName = search.slice(7)
    
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(()=> {
      setIsLoading(true)
       getArticles().then((response)=> { if(search) {
        
        const filteredArticles = response.articles.filter((article) => {
            return article.topic === topicName
        })
        setArticlesList(filteredArticles)
        setIsLoading(false)
    } else {
        setArticlesList(response.articles);
        setIsLoading(false)
      }})

    }, [search])

    
    return (<section className="all_articles">
      {search? <h1>{topicName}</h1>: <h1>Articles</h1>} 
      {isLoading ? <h2>Loading results...</h2>: <h2>Results:</h2>}
          <ul>
        {articlesList.map((article) => {
          return(<ArticleCard article={article}/>)
        })}
          </ul>
    </section>)
}
export default Articles