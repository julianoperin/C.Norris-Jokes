import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search Joke</Link>
        </li>
        <li>
          <Link to="/random">Random Joke</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
