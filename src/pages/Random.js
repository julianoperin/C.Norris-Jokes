import React, { useState } from "react";
import axios from "axios";

const Random = () => {
  const [userInput, setUserInput] = useState("");
  const [joke, setJoke] = useState("");

  const handleClickBtn = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${userInput}`
    );
    setJoke(response.data.value);
  };

  return (
    <div>
      <h1 className="title-single-joke">Categories</h1>
      <div className="box-category">
        <select
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        >
          <option value="sport">sport</option>
          <option value="career">career</option>
          <option value="fashion">fashion</option>
          <option value="money">money</option>
          <option value="movie">food</option>
          <option value="music">music</option>
          <option value="food">food</option>
          <option value="travel">travel</option>
          <option value="science">science</option>
          <option value="history">history</option>
        </select>
        <button onClick={handleClickBtn}>
          {joke !== "" ? "Another Joke" : "Search"}
        </button>
      </div>
      <h2 className="single-joke">{joke !== "" ? `"${joke}"` : ""}</h2>
    </div>
  );
};

export default Random;
