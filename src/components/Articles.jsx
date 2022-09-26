
import { useEffect, useState } from "react"
import {getArticles} from '../utils/api_funcs'
import ArticleCard from "./ArticleCard"

const Articles = () =>{
    
    const [articlesList, setArticlesList] = useState([])
    useEffect(()=> {
       getArticles().then((response)=> {setArticlesList(response.articles)})

    }, [])
    return (<section className="all_articles">
          <ul>
        {articlesList.map((article) => {
          return(<ArticleCard article={article}/>)
        })}
          </ul>
    </section>)
}
export default Articles