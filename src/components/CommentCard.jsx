const CommentCard = ({comment})=> {
    return (<section className='comment_card'>
        <p>"{comment.body}"</p>
    <p>-{comment.author}</p>
        </section>)
    
}
export default CommentCard