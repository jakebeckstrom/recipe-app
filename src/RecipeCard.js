import React from "react";

const RecipeCard = () => {
    return (
        <div class="card">
            <div class="card-header">
                RecipeName
            </div>
            <div class="card-body">
                <p class="card-text">Desc.</p>
                <a href="#" class="btn btn-primary">View Recipe</a>
            </div>
        </div>
    )
}

export default RecipeCard;