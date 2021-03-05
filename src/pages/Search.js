import React, { useState } from "react";
import axios from "axios";
import Item from "../components/item";

const Search = () => {
  const [input, setInput] = useState("");
  const [jokes, setJokes] = useState([]);

  const URL = `https://api.chucknorris.io/jokes/search?query=${input}`;

  const getJoke = async () => {
    const response = await axios.get(URL);
    setJokes(response.data.result);
    setInput("");
  };
  return (
    <>
      <div className="header">
        <h1>Chuck Norris</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for joke..."
        />
        <button onClick={getJoke} type="button">
          Search
        </button>
      </div>
      <div className="jokes">
        <h2>{jokes.length > 0 ? `Results:` : ""}</h2>
        <Item jokes={jokes} />
      </div>
    </>
  );
};

export default Search;
