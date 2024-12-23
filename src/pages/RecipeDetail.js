import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneRecipe, deleteRecipeById } from "../util/api";

const RecipeDetail = () => {

    const [ recipe, setRecipe ] = useState(undefined);
    const recipeParams = useParams();
    const navigate = useNavigate()
    
    useEffect(() =>{
        async function get() {
            const resp = await getOneRecipe(recipeParams.id);
            setRecipe(resp);
        }
        get();
    }, [])

    const deleteRecipe = async (id) => {
        await deleteRecipeById(id);
        navigate("/");
    }

    if (recipe === undefined) {
        return <div>Loading</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1>{recipe.name}</h1>
                </div>
                <div className="col-4">
                    <button className="btn btn-secondary m-2">
                        Add To Plan
                    </button>
                    <button className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        Delete
                    </button>
                </div>
            </div>
            <div className="row">
                <p>{recipe.recipe}</p>
            </div>
            
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="deleteModalLabel"></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete: {recipe.name}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecipeDetail;