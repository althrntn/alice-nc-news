import { useEffect, useState } from "react"
import { deleteComment } from "../utils/api_funcs"

const CommentCard = ({comment, user})=> {
    const [removeComment, setRemoveComment] = useState(false)
    const [deleteComplete, setDeleteComplete] = useState(false)

    const handleClick = () => {
        setRemoveComment(true)
    }

    useEffect(() => {
        if (removeComment) {
            deleteComment(comment.comment_id).then(()=> {
                setDeleteComplete(true); setRemoveComment(false)
            })
        }
    }, [removeComment])


    return (<section className='comment_card'>
         {deleteComplete? <p>comment removed</p>: <div><p>"{comment.body}"</p>
    <p>-{comment.author}</p>
    {user===comment.author? <button onClick={()=> handleClick()}>remove</button>: <p></p>}</div>}
        
    {removeComment? <p>removing comment</p>:<p></p>}
   
        </section>)
    
}
export default CommentCard