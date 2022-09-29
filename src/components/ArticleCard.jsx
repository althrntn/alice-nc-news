import { useNavigate } from "react-router-dom"

const ArticleCard = ({article}) => {
    const date = article.created_at
    const navigate = useNavigate()
    return(<div> <h1>{article.title}</h1>
    <p> By {article.author}, {date.slice(8, 10)}-{date.slice(5, 7)}-{date.slice(0, 4)}</p>
    <p>Topic: {article.topic}, Votes: {article.votes}</p>
    <button className="article_button" onClick={()=>{navigate(`/articles/${article.article_id}`)}}>Read in full</button></div>)

}
export default ArticleCard