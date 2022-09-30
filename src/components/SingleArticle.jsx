import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Errors from './Errors'
import VoteForArticle from "./VoteForArticle"
import { getArticlebyId } from "../utils/api_funcs"
import CommentsForArticle from "./CommentsForArticle"
import NewComment from "./NewComment"

const SingleArticle = ({user}) => {
    
    const [selectedArticle, setSelectedArticle] = useState({})
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [voteCount, setVoteCount] = useState(0)
    const [hasVoted, setHasVoted] = useState(false)
 
    useEffect(()=> {
        getArticlebyId(article_id).then((response) => {setSelectedArticle(response.article); setVoteCount(response.article.votes); setIsLoading(false)}).catch((err)=> {setError({error: err.response})})
    }, [article_id])

    if (error) {
        return <Errors error={error}/>
    }


 return (<section className="article_card">
    {isLoading ? <h1>Loading article...</h1> : <section><h1 className="subheading">{selectedArticle.title}</h1>
 <h2>{selectedArticle.author}</h2>
 <p className='core_content'>{selectedArticle.body}</p></section>}
 <VoteForArticle article_id={article_id} voteCount={voteCount} setVoteCount={setVoteCount} hasVoted={hasVoted} setHasVoted={setHasVoted} setError={setError}/>
  <NewComment article_id={article_id} className='comment_element'/>
 <p></p>
<CommentsForArticle article_id={article_id} className='comment_element'/>
 </section>
)
}
export default SingleArticle