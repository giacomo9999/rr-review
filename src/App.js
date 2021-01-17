import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FruitsList from "./FruitsList";

const Home = () => {
  return (
    <div className="container-inner">
      <h2>Home</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="container-outer">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fruits_list">List Of Fruits</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/fruits_list"}>
          <FruitsList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
