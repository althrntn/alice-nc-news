import { useEffect, useState } from "react"
import { extractParams } from "../utils/manipFuncs"

const SortButtons = ({setSearchParams, searchParams}) => {
    const [sort, setSort] = useState('')
    const [order, setOrder] = useState('')
    const optionsRef = {Votes: 'votes', Date: 'created_at', Comments: 'comment_count'}
    
     const params = extractParams(searchParams)

    useEffect(()=> {
        if(sort && sort !== 'Sort by:'){
            setSearchParams({...params, sort_by: optionsRef[sort]})
        }},[sort])

    useEffect(()=> {
        if(order === 'Ascending'){
            setSearchParams({...params, order: 'asc'})
        } else {
            setSearchParams({...params, order: 'desc'})
        }
        
        }, [order])

    return (
         <section>
        <label htmlFor="sort_by">Sort articles by</label>
    <select id="sort_by" onChange={(e)=>{setSort(e.target.value)}}>
         <option>Sort by:</option>
        <option>Votes</option>
        <option>Date</option>
        <option>Comments</option>
    </select>
    <label htmlFor="order"></label>
    <select id="order" onChange={(e)=> {setOrder(e.target.value)}}>
        <option>Descending</option>
        <option>Ascending</option>
    </select>

        </section>
    )
   
}
export default SortButtons