import axios from 'axios';

export const SEARCH_RECIPES_REQUEST = 'SEARCH_RECIPES_REQUEST';
export const SEARCH_RECIPES_SUCCESS = 'SEARCH_RECIPES_SUCCESS';
export const SEARCH_RECIPES_FAILURE = 'SEARCH_RECIPES_FAILURE';

// const apiKey = "fe15e2368b8a41dd9cc8f80d4e467fc8"; // 'f427ca4dc09b48b3a3a708ea2c5b66f2'

export const searchRecipes = (query) => {

    return async (dispatch) => {

        if (!query || query.trim() === '') {
            dispatch({ type: SEARCH_RECIPES_FAILURE, error: 'La query non può essere vuota.' });
            return;
        }

        dispatch({ type: SEARCH_RECIPES_REQUEST });
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=Vegetarian&apiKey=f427ca4dc09b48b3a3a708ea2c5b66f2`);
            dispatch({ type: SEARCH_RECIPES_SUCCESS, payload: response.data.results });

            if (!response.data.results || response.data.results.length === 0) {
                throw new Error('La ricetta cercata non è stata trovata.');
            }
        } catch (error) {
            dispatch({ type: SEARCH_RECIPES_FAILURE, error: error.message });
        }
    };
};
export const searchRandomRecipes = () => {

    return async (dispatch) => {
        dispatch({ type: SEARCH_RECIPES_REQUEST });
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=10&diet=Vegetarian&apiKey=f427ca4dc09b48b3a3a708ea2c5b66f2`);
            dispatch({ type: SEARCH_RECIPES_SUCCESS, payload: response.data.recipes });
        } catch (error) {
            dispatch({ type: SEARCH_RECIPES_FAILURE, error: error.message });
        }
    };
};
