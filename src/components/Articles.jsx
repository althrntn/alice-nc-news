
import { useEffect, useState } from "react"
import {getArticles} from '../utils/api_funcs'
import ArticleCard from "./ArticleCard"

const Articles = () =>{
    const search = window.location.search;
    
    const [articlesList, setArticlesList] = useState([])
  
    useEffect(()=> {
       getArticles().then((response)=> { if(search) {
        const topicName = search.slice(7)
        const filteredArticles = response.articles.filter((article) => {
            return article.topic === topicName
        })
        setArticlesList(filteredArticles)
    } else {
        setArticlesList(response.articles)}})

    }, [search])

    
    return (<section className="all_articles">
          <ul>
        {articlesList.map((article) => {
          return(<ArticleCard article={article}/>)
        })}
          </ul>
    </section>)
}
export default Articles