import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
