import { useState } from "react"
import { createSearchParams } from "react-router-dom"

const TopicSelect = ({topicList, setSearchParams}) => {
    const [topicChoice, setTopicChoice] = useState('')

const handleSubmit = (event) => {
    event.preventDefault()
    if(topicChoice){
        setSearchParams({topic:topicChoice})
    } else {
        setSearchParams({topic:topicList[0]})
    }
    
}
    return(
    <form onSubmit={(event) => handleSubmit(event)}>
    <select onChange={(e) => setTopicChoice(e.target.value)}>
            {topicList.map((topicItem) => {
              return <option key={topicItem}>{topicItem}</option>;
            })}
          </select>
           <button type='submit'>Search</button>
        </form>)

}
export default TopicSelect