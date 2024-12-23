import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMealPlanner } from "../hooks/MealPlannerHook";
import { useTags } from "../hooks/TagsHook";

const RecipeCard = ({recipe, reset}) => {

    const navigate = useNavigate();
    const {isInMealPlan, addToPlan, removeFromPlan} = useMealPlanner();
    const { lookUpTag } = useTags();

    const getTag = (i) => {
        const tag = lookUpTag(i);
        return <span class="badge text-bg-secondary" key={i}>{tag}</span>
    }
    
    return (
            <div class="card">
                <div class="card-header">
                    <div className="row">
                        <div className="col-6">
                            <Link to={"recipe/" + recipe.id }>{recipe.name}</Link>
                        </div>
                        <div className="col-6">
                            {isInMealPlan(recipe.id) ? 
                            <button className="btn btn-secondary" onClick={() => removeFromPlan(recipe.id)}>Remove</button>
                            :
                            <button className="btn btn-secondary" onClick={() => addToPlan(recipe.id)}>Add</button>
                            }
                        </div>
                    </div>
                </div>
                {recipe.tags && <div class="card-body">
                    {recipe.tags.map(i => getTag(i))}
                </div>}
            </div> 
        
    )
}

export default RecipeCard;