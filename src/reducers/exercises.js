/**
 * Created by chris on 2/8/17.
 */



const exercise = (state, action) => {
    switch (action.type) {
        case 'ADD_EXERCISE':
            return {
                id: action.id,
                name: action.name,
                orm: 0,
            };
        case 'EDIT_NAME':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                name: action.name
            };
        case 'UPDATE_ORM':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                orm: action.orm
            };
        default:
            return state;
    }
};

const exercises = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXERCISE':
            return [
                ...state,
                exercise(undefined, action)
            ];

        case 'EDIT_NAME':
        case 'UPDATE_ORM':
            return state.map(lift => exercise(lift, action));

        case 'DELETE_EXERCISE':
            return state.slice(0,action.index).concat(action.index + 1);
        default:
            return state;
    }
};

export default exercises;