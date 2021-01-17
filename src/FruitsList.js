import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import fruitsData from "./FruitsData";
import Fruit from "./Fruit";

const FruitsList = () => {
  const { url, path } = useRouteMatch();
  const linkList = fruitsData.map((fruit) => (
    <li key={fruit.id}>
      <Link to={`${url}/${fruit.id}`}>{fruit.name}</Link>
    </li>
  ));
  return (
    <div className="container-inner">
      <h2>Fruits List</h2>
      <ul>{linkList}</ul>

      <Route path={`${path}/:fruitId`}>
        <Fruit />
      </Route>
    </div>
  );
};

export default FruitsList;
