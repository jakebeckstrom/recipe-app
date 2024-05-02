import React from "react";
import RecipeCard from "./RecipeCard";

const stubList = ["1", "2", "3"];

const RecipeList = () => {
  const recipes = stubList;

  return (
    <div className="col-lg-4">
      {recipes.map((recipe) => (
        <RecipeCard />
      ))}
    </div>
  );
};

export default RecipeList;
