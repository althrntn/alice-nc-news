import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticlebyId } from "../utils/api_funcs"
import Errors from './Errors'
import { incVotes } from "../utils/api_funcs"

const SingleArticle = () => {
    const [selectedArticle, setSelectedArticle] = useState({})
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [voteCount, setVoteCount] = useState(0)
    const [hasVoted, setHasVoted] = useState(false)

    const handleVoteClick = () => {
        setVoteCount((currVoteCount) => {
        return currVoteCount+1})
        setHasVoted(true)
        incVotes(article_id, hasVoted).catch((err)=> {
            setVoteCount((currVoteCount) => {
                return currVoteCount-1
            });
            setError({error:{errorMessage: 'something went wrong'}})
        });
}
    const undoVote =() => {
        setVoteCount((currVoteCount) => {
                return currVoteCount-1
            })
        setHasVoted(false);
        incVotes(article_id, hasVoted).catch((err)=> {
            setVoteCount((currVoteCount) => {
                return currVoteCount+1
            });
            setError({error:{errorMessage: 'something went wrong'}})
    })}
 
    useEffect(()=> {
        getArticlebyId(article_id).then((response) => {setSelectedArticle(response.article); setVoteCount(response.article.votes); setIsLoading(false)}).catch((err)=> {setError({error: err.response})})
    }, [article_id])

    if (error) {
        return <Errors error={error}/>
    }


 return (<section>
    {isLoading ? <h1>Loading article...</h1> : <section><h1>{selectedArticle.title}</h1>
 <h2>{selectedArticle.author}</h2>
 <p>{selectedArticle.body}</p></section>}
 
 {hasVoted? <button onClick={()=> {undoVote()}}>Undo vote</button>: <p><button onClick={()=>handleVoteClick()}>Vote</button></p>}
 <p>Votes: {voteCount}</p>
 </section>)
}
export default SingleArticle