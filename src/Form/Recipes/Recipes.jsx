import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Loader from '../../Loader/Loader';
import { Button } from 'react-bootstrap'
import { NotificationManager } from 'react-notifications';

import RecipeBox from './component/recipeBox';

import './Recipes.css';

const appKey = '4b246fd259e1126b41724b8f5b8bc692';
const appID = 'b2c558eb';
const defaultRecipies = [{
    recipe: {
        noClick: false,
        label: 'Empty plate ...',
        calories: 0,
        image: 'https://previews.123rf.com/images/franz12/franz121802/franz12180200656/96714030-conceptual-image-of-the-end-of-the-holiday-is-an-empty-plate-with-crumbs-and-a-fork-on-it-.jpg',
        ingredients: [
            { text: '1/2 cup of nothing' }
        ]
    }
}];

const Recipes = () => {
    let history = useHistory();

    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('beef');
    const [loading, setLoading] = useState(false);

    useEffect(() => { getRecipes() }, []);

    const getRecipes = async () => {
        try {
            setLoading(true);
            const data = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${searchTerm}&app_id=${appID}&app_key=${appKey}`)
                .then(res => res.json());
            if (!data.hits.length) {
                setRecipes(defaultRecipies);
            } else {
                setRecipes(data.hits);
            }
        } catch (error) {
            NotificationManager.warning('Request failed due to many attempts', 'Error', 5000);
            setRecipes(defaultRecipies);
        } finally {
            setLoading(false);
        };
    };


    const showDetails = (event, props) => {
        event.preventDefault();
        history.push({
            pathname: '/recipe',
            state: props.recipe
        });
    };

    return (
        loading ? <Loader /> :
            <div>
                <div className="recipes-container">
                    <form className="input-form" onSubmit={getRecipes}>
                        <input
                            onChange={e => setSearchTerm(e.target.value)}
                            className="search-input"
                            type="text"
                            value={searchTerm}
                        />
                        <Button className="search-btn" type="submit">Search</Button>
                    </form>
                    {
                        recipes.map(recipe => (
                            <RecipeBox recipeData={recipe} showDetails={showDetails} />
                        ))
                    }
                </div>
            </div>
    );
};

export default Recipes;