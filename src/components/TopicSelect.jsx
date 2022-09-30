import { useState } from "react"
import { extractParams } from "../utils/manipFuncs"

const TopicSelect = ({topicList, setSearchParams, searchParams}) => {
    const [topicChoice, setTopicChoice] = useState('')

const handleSubmit = (event) => {
    event.preventDefault()
    const params = extractParams(searchParams)
    if(topicChoice){
        setSearchParams({...params, topic:topicChoice})
    } else {
        setSearchParams({...params, topic:topicList[0]})
    }
    
}
    return(
    <form className='dropdown' onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="topic_choice" >Topic</label>
    <select id="topic_choice" onChange={(e) => setTopicChoice(e.target.value)}>
            {topicList.map((topicItem) => {
              return <option key={topicItem}>{topicItem}</option>;
            })}
          </select>
           <button type='submit'>Search</button>
        </form>)

}
export default TopicSelect