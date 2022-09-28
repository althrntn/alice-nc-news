import { useNavigate } from "react-router-dom"

const ArticleCard = ({article}) => {
    const date = article.created_at
    const navigate = useNavigate()
    return(<li key={article.article_id} className='article_card'> <h1>{article.title}</h1>
    <p> By {article.author}, {date.slice(8, 10)}-{date.slice(5, 7)}-{date.slice(0, 4)}</p>
    <p>Topic: {article.topic}</p>
    <button className="article_button" onClick={(git )=>{navigate(`/articles/${article.article_id}`)}}>Read in full</button></li>)

}
export default ArticleCard