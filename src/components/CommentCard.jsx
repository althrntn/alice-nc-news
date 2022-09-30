import {useState } from "react"
import { deleteComment } from "../utils/api_funcs"

const CommentCard = ({comment, user})=> {
    const [removeComment, setRemoveComment] = useState(false)
    const [deleteComplete, setDeleteComplete] = useState(false)

    const handleClick = () => {
        setRemoveComment(true)
            deleteComment(comment.comment_id).then(()=> {
                setDeleteComplete(true); setRemoveComment(false)
            })
    }

    return (<section className='comment_card'>
         {deleteComplete? <p className='success_message'>Comment removed</p>: <div><p>"{comment.body}"</p>
    <p>-{comment.author}</p>
    {user===comment.author? <button onClick={()=> handleClick()}>remove</button>: <p></p>}</div>}
        
    {removeComment? <p>Removing comment</p>:<p></p>}
   
        </section>)
    
}
export default CommentCard