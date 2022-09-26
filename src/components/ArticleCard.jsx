const ArticleCard = ({article}) => {
    console.log(article)
    const date = article.created_at
    return(<li key={article.article_id} className='article_card'> <h1>{article.title}</h1>
    <p> By {article.author}, {date.slice(8, 10)}/{date.slice(5, 7)}/{date.slice(0, 4)}</p>
    <p>Topic: {article.topic}</p>
    <button id="article_button">Read in full</button></li>)

}
export default ArticleCard