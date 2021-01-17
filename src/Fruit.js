import React from "react";
import { useParams } from "react-router-dom";
import fruitsData from "./FruitsData";

const Fruit = () => {
  const { fruitId } = useParams();
  const fruit = fruitsData.find((entry) => entry.id === Number(fruitId));
  return (
    <div className="fruit-info">
      <h2>Name: {fruit.name}</h2>
      <h2>Color: {fruit.color}</h2>
    </div>
  );
};

export default Fruit;
