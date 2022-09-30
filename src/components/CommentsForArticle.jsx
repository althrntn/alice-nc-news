import { useEffect, useState, useContext } from "react"
import { getCommentsForArticle } from "../utils/api_funcs"
import { UserContext} from "../contexts/User"
import CommentCard from './CommentCard'

const CommentsForArticle = ({article_id}) => {
     const [user, setUser] = useContext(UserContext)
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

    
    return (<section className='comment_element'>
{viewComments ? <section><button onClick={()=>{handleCommentClick()}}>Hide Comments</button> <ul>
    {comments.map((comment) => {
    return (
        <li key={comment.comment_id}>
        <CommentCard comment={comment} user={user}/>
        </li>
    )   
    })}</ul></section> : <section><button onClick={()=>{handleCommentClick()}}>View Comments</button></section>}
    </section>
    )

}
export default CommentsForArticle