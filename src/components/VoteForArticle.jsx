import { incVotes } from "../utils/api_funcs"


const VoteForArticle = ({article_id, voteCount, hasVoted, setHasVoted, setError, setVoteCount}) => {

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

    return ( <section>{hasVoted? <button onClick={()=> {undoVote()}}>Undo vote</button>: <p><button onClick={()=>handleVoteClick()}>Vote</button></p>}
 <p>Votes: {voteCount}</p>
 </section>)

}
export default VoteForArticle