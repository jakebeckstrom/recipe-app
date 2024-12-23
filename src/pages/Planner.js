import React, { useContext, useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { MealPlanContext } from "../contexts/PlanContext";
import { getOneRecipe, getRecipes } from "../util/api";

const Planner = () => {

    const { mealPlan, setMealPlan } = useContext(MealPlanContext);
    const [ recipes, setRecipes ] = useState(undefined);

    useEffect(() => {
        async function get() {
          const list = await Promise.all(mealPlan.map(async (id) => {
            return await getOneRecipe(id);
          }))
          setRecipes(list);
        }
        get()
      }, [mealPlan])

    if (recipes === undefined) return <div>Loading</div>

    return(
        <div className="container">
            <div className="row">
                <h1>Meal Planner</h1>
            </div>
            <div className="row">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            </div>
        </div>
    )
}

export default Planner;