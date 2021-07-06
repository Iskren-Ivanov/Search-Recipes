import React from 'react';
import './recipeBox.css';

const RecipeBox = ({ recipeData, showDetails }) => {
    let box = (
        <div className="recipes-box"
            onClick={(event) => showDetails(event, recipeData)}>
            <h1>{recipeData.recipe.Loaderlabel}</h1>
            <p className="calories-recipes">Calories: {recipeData.recipe.calories.toFixed(2)}</p>
            <div className="details-container">
                <img className="recipe-image" src={recipeData.recipe.image} alt="Loading..." />
                {recipeData.recipe.ingredients.map((ingredient) =>
                    <li>{ingredient.text}</li>
                )}
            </div>
        </div>
    );

    if (recipeData.recipe?.noClick === false) {
        box = (<div className="recipes-box">
            <h1>{recipeData.recipe.Loaderlabel}</h1>
            <p className="calories-recipes">Calories: {recipeData.recipe.calories.toFixed(2)}</p>
            <div className="details-container">
                <img className="recipe-image" src={recipeData.recipe.image} alt="Loading..." />
                {recipeData.recipe.ingredients.map((ingredient) =>
                    <li>{ingredient.text}</li>
                )}
            </div>
        </div>)
    };

    return box;
};

export default RecipeBox;