import { useState } from "react"

const TopicSelect = ({setSelectedTopic, topicList}) => {
    const [topicChoice, setTopicChoice] = useState('')

const handleSubmit = (event) => {
    event.preventDefault()
    if(topicChoice){
        setSelectedTopic(topicChoice)
    } else {
        setSelectedTopic(topicList[0])
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