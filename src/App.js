import { Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { useEffect, useState } from "react";
import { getTopics } from "./utils/api_funcs";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [topicList, setTopicList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [user, setUser] = useState("grumpy19");

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
        <Header user={user} />

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
            element={<SingleArticle user={user} />}
          ></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
