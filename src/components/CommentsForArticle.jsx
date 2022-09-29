import { useEffect, useState } from "react"
import { getCommentsForArticle } from "../utils/api_funcs"
import CommentCard from './CommentCard'

const CommentsForArticle = ({article_id}) => {
    const [comments, setComments] = useState([])
    const [viewComments, setViewComments] = useState(false)

    const handleCommentClick = () => {
        setViewComments(!viewComments)
    }
    useEffect(()=> {
        if (viewComments){
            getCommentsForArticle(article_id, viewComments).then((response)=>{
            setComments(response.comments)
        })
        }
        
    },[viewComments])

    
    return (<section>
{viewComments ? <section><button onClick={()=>{handleCommentClick()}}>Hide Comments</button> <ul>
    {comments.map((comment) => {
    return (
        <li key={comment.comment_id}>
        <CommentCard comment={comment}/>
        </li>
    )   
    })}</ul></section> : <section><button onClick={()=>{handleCommentClick()}}>View Comments</button></section>}
    </section>
    )

}
export default CommentsForArticle