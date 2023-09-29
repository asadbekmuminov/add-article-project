function Article({ articles, setArticles }) {
  const deleteArticle = (id) => {
    articles = articles.filter((article) => {
      return id !== article.id;
    });
    setArticles(articles);
  };
  return (
    <ul className="flex items-center flex-col">
      {articles.map((article) => (
        <li
          className=" sm:w-[450px] w-[350px] bg-slate-100 border-[2px] mb-4 border-black py-5 px-4 rounded-[6px] shadow-sm sm:shadow md:shadow-lg lg:shadow-xl xl:shadow-2xl text-center"
          key={article.id}
        >
          <h3 className="font-bold text-2xl mb-2">📌"{article.title}"</h3>
          <p className="font-bold text-2xl italic mb-2">✒️{article.author}</p>
          <p className="font-bold text-2xl mb-7">🗓{article.date}</p>
          <button
            onClick={() => {
              deleteArticle(article.id);
            }}
            className="border-1 border-black font-semibold py-2 px-4 bg-gray-600 rounded-[8px] transition-10 hover:bg-gray-400"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Article;
