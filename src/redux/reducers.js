import { SEARCH_RECIPES_REQUEST, SEARCH_RECIPES_SUCCESS, SEARCH_RECIPES_FAILURE } from './action';

const initialState = {
    recipes: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_RECIPES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SEARCH_RECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                recipes: action.payload,
            };
        case SEARCH_RECIPES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;
