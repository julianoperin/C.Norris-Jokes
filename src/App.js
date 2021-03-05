import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//! Components
import Navbar from "./components/Navbar";

//! Pages
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";
import Random from "./pages/Random.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/random" component={Random} />
      </Switch>
    </Router>
  );
};

export default App;
