import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { useEffect, useState } from "react";
import { getTopics } from "./utils/api_funcs";
import SingleArticle from "./components/SingleArticle";

function App() {
  const navigate = useNavigate();
  const [topicList, setTopicList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    getTopics().then((response) => {
      const topics = response.map((ele) => {
        return ele.slug;
      });
      setTopicList(topics);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <Header />

        <Routes>
          <Route
            path="/articles"
            element={
              <Articles
                searchParams={searchParams}
                topicList={topicList}
                setSearchParams={setSearchParams}
              />
            }
          />
          <Route
            path="articles/:article_id"
            element={<SingleArticle />}
          ></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
