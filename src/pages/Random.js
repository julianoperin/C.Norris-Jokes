import React, { useState } from "react";
import axios from "axios";

const Random = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <h1>Categories</h1>
      <div className="box-category">
        <input type="text" />
        <select>
          <option value="">animal</option>
          <option value="">travel</option>
          <option value="">food</option>
        </select>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Random;
