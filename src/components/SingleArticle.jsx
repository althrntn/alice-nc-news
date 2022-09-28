import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticlebyId } from "../utils/api_funcs"
import Errors from './Errors'

const SingleArticle = () => {
    const [selectedArticle, setSelectedArticle] = useState({})
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
 
    useEffect(()=> {
        getArticlebyId(article_id).then((response) => {setSelectedArticle(response.article); setIsLoading(false)}).catch((err)=> {setError({error: err.response})})
    }, [article_id])

    if (error) {
        return <Errors error={error}/>
    }


 return (<section>
    {isLoading ? <h1>Loading article...</h1> : <section><h1>{selectedArticle.title}</h1>
 <h2>{selectedArticle.author}</h2>
 <p>{selectedArticle.body}</p></section>}
 </section>)
}
export default SingleArticle