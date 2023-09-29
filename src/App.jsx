import { useEffect, useState } from "react";
import Form from "./Form";
import Article from "./Article";
const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("articles")) || [];
};
function App() {
  const [articles, setArticles] = useState(getDataFromLocalStorage());

  const addArticle = (article) => {
    setArticles((prev) => {
      return [...prev, article];
    });
  };
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  return (
    <div className=" h-[100%] flex-col ">
      <h1 className="text-5xl  text-center pt-9 mb-6 font-bold ">
        Add Article
      </h1>
      <Form addArticle={addArticle} />
      <Article articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default App;
