import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getRecipes } from "../util/api";
import RecipeSearch from "../components/RecipeSearch";

const RecipeList = () => {
  const [ recipes, setRecipes ] = useState(undefined);
  const [ filteredRecipes, setFilteredRecipes ] = useState(recipes);
  const [ searchTags, setSearchTags ] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const resp = await getRecipes();
      setRecipes(resp);
    }
    getList()
  }, [])

  useEffect(() => {
    if (searchTags.length === 0) {
      console.log("No filters")
      setFilteredRecipes(recipes);
    } else {
      console.log("Filters found")
      const filtered = recipes.filter((recipe) => {
        searchTags.forEach((tag) => {
          if (recipe.tags.includes(tag)) {
            return false
          }
        })
        return true;
      })
      setFilteredRecipes(filtered)
    }
  }, [searchTags])

  if (recipes === undefined || filteredRecipes === undefined) {
    return <div>Loading</div>
  }

  return (
    <div className="col-lg-4">
      <RecipeSearch searchTags={searchTags} setSearchTags={setSearchTags} />
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe}/>
      ))}
    </div>
  );
};

export default RecipeList;
