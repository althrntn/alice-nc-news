import { useEffect, useState, useContext } from "react"
import { UserContext} from "../contexts/User"
import { postCommentForArticle } from "../utils/api_funcs"
import CommentCard from "./CommentCard"
import Errors from "./Errors"

const NewComment = ({article_id})=>{
    const [user, setUser] = useContext(UserContext)
    const [newComment, setNewComment] = useState({})
     const [newCommentBody, setNewCommentBody] = useState('')
     const [error, setError] = useState(null)
     const [postedComment, setPostedComment] = useState({})
     const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
         if(!newCommentBody) {
            return setError({msg: 'please add text to your comment'})
        }
        setNewComment({username:user, body: newCommentBody})
    }

    useEffect(()=> {
        if(newComment.body){
            setIsSubmitting(true)
            postCommentForArticle(article_id, newComment).then((response)=>{
        setPostedComment(response.comment); setNewCommentBody (''); setIsSubmitting(false); setError(null)
        })}
       
    }, [newComment])


return (<section className='comment_element'><form id="new_comment" onSubmit={(e)=>{handleSubmit(e)}}>
    <label htmlFor="comment_body">Comment</label>
    <p></p>
    <textarea id="comment_body" value={newCommentBody} onChange={(e)=>setNewCommentBody(e.target.value)}></textarea>
    <p>Posting as: {user}</p>
    {postedComment.body? <div><p>Latest comment: </p><CommentCard comment={postedComment}/></div>: <p></p>}
    <button type="submit">Post Comment</button></form>
    {isSubmitting? <p>please wait for your comment to submit</p>: <p></p>}
    {error? <Errors error={error}/>: <p></p>}</section>)
}
export default NewComment