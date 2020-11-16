import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="card my-5 text-center">
      <h1 className="card-header">{title}</h1>
      <div className="card-body">
        <ol className="list-group list-group-flush">
          {ingredients.map((ingredient) => (
            <li className="list-group-item">{ingredient.text}</li>
          ))}
        </ol>
        <p className="card-text">{calories} kcal</p>
        <img className="card-img" src={image} alt="" />
      </div>
    </div>
  );
};

export default Recipe;
