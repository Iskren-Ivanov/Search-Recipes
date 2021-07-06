import React from 'react';
import './Recipe.css';

const Recipe = ({ location }) => {
    const { label, calories, image, ingredients, cautions, dietLabels, healthLabels } = location.state;

    return (
        <div className="recipe-container">
            <h1 >{label}</h1>
            <p>Calories: {calories.toFixed(2)}</p>
            <div className="info-recipe">
                <div className="info-box-left">
                    Cautions: {cautions.map((caution) => (
                        <li>{caution}</li>
                    ))}
                </div>
                <div className="info-box-center">Diet Labels: {dietLabels.map(label => (
                    <li>{label}</li>
                ))}
                </div>
                <div className="info-box-right">
                    Health Labels: {healthLabels.map((label) => (
                        <li>{label}</li>
                    ))}
                </div>
            </div>
            <img className="recipe-image" src={image} alt="Loading..." />
            <div className="recipe-ingredients">
                {ingredients.map((ingredient) =>
                    <li>{ingredient.text}</li>
                )}
            </div>
        </div>
    );
};

export default Recipe;