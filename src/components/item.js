import React from "react";
import "./item.css";

const item = ({ jokes }) => {
  return (
    <ul>
      {jokes.map((item) => {
        return (
          <li className="item-li" key={item.id}>
            <img src={item.icon_url} alt="icon" />
            <span>{item.value} </span>
          </li>
        );
      })}
    </ul>
  );
};

export default item;
