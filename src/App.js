import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { useEffect, useState } from "react";
import { getTopics } from "./utils/api_funcs";
import TopicSelect from "./components/TopicSelect";

function App() {
  const navigate = useNavigate();
  const [topicList, setTopicList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  useEffect(() => {
    getTopics().then((response) => {
      const topics = response.map((ele) => {
        return ele.slug;
      });
      setTopicList(topics);
    });
  }, []);

  useEffect(() => {
    navigate(`/articles?topic=${selectedTopic}`);
  }, [selectedTopic]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <TopicSelect
                topicList={topicList}
                setSelectedTopic={setSelectedTopic}
              />
            }
          />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
