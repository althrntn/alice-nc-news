
import { useEffect, useState } from "react"
import {getArticles} from '../utils/api_funcs'
import ArticleCard from "./ArticleCard"
import TopicSelect from "./TopicSelect"

const Articles = ({searchParams, topicList, setSearchParams}) =>{
    const topicName = searchParams.get('topic')
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
  
    useEffect(()=> {
      setIsLoading(true)
       getArticles(searchParams).then((response)=> { 
        setArticlesList(response.articles)
        setIsLoading(false)
      })}, [searchParams])


    
    return (<section className="all_articles">
      <TopicSelect
                topicList={topicList}
                setSearchParams={setSearchParams}
              />
      {searchParams? <h1>{topicName}</h1>: <h1>Articles</h1>} 
      {isLoading ? <h2>Loading results...</h2>: <h2>Results:</h2>}
          <ul>
        {articlesList.map((article) => {
          return(<ArticleCard article={article}/>)
        })}
          </ul>
    </section>)
}
export default Articles