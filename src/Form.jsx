import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Form({ addArticle }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    addArticle({
      id: uuidv4(),
      title,
      author,
      date,
    });
    setTitle("");
    setAuthor("");
    setDate("");
  };
  return (
    <form onSubmit={handelSubmit} className="flex flex-col items-center">
      <div className="form-control">
        <label className="font-bold mb-3" htmlFor="title">
          Title:
        </label>
        <input
          className="border-2 border-black py-2 rounded-[8px] w-[300px] text-xl"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="article title"
          value={title}
          required
        />
      </div>
      <div className="form-control">
        <label className="font-bold mb-3" htmlFor="author">
          Author:
        </label>
        <input
          className="border-2 border-black py-2 rounded-[8px] w-[300px] text-xl"
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          id="author"
          placeholder="article author"
          value={author}
          required
        />
      </div>
      <div className="form-control ">
        <label className="font-bold mb-3" htmlFor="date">
          Date:
        </label>
        <input
          className="border-2 border-black py-2 rounded-[8px] w-[300px]  text-xl"
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="date"
          placeholder="article date"
          value={date}
          required
        />
      </div>
      <div className="w-[100%] flex items-center mt-8 transition-10">
        <button className="mr-auto ml-auto bg-green-400 py-3 px-6 rounded-lg font-bold border-2 mb-20 border-black hover:bg-gray-300">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
