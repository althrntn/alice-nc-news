
import { useEffect, useState } from "react"
import {getArticles} from '../utils/api_funcs'
import ArticleCard from "./ArticleCard"
import TopicSelect from "./TopicSelect"
import SortButtons from './SortButtons'
import Errors from "./Errors"

const Articles = ({searchParams, topicList, setSearchParams}) =>{
    const topicName = searchParams.get('topic')
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
  
    useEffect(()=> {
      setIsLoading(true)
       getArticles(searchParams).then((response)=> { 
        setArticlesList(response.articles)
        setIsLoading(false)
      }).catch((err)=> {console.log(err.response.data.msg); setError({error: err.response})})}, [searchParams])


    
    return (<section className="all_articles">
      <TopicSelect
                topicList={topicList}
                setSearchParams={setSearchParams}
                searchParams={searchParams}
              />
              <p></p>
      <SortButtons searchParams={searchParams} setSearchParams={setSearchParams}/>
      {searchParams? <h1>{topicName}</h1>: <h1>Articles</h1>} 
      {isLoading ? <h2>Loading results...</h2>: <h2>Results:</h2>}
          <ul>
        {articlesList.map((article) => {
          return(<li key={article.article_id} className="article_card"><ArticleCard article={article}/></li>)
        })}
          </ul>
          {error? <Errors error={error}/>: <p></p>}
    </section>)
}
export default Articles