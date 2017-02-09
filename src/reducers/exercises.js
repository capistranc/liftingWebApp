/**
 * Created by chris on 2/8/17.
 */

const initState = [{id: 0, name: 'squat', orm: 345}, {id: 1, name: 'shoulder press', orm: 175},
    {id: 2, name: 'bench press', orm: 275}, {id: 3, name: 'rows', orm: 275},
    {id: 4, name: 'deadlift', orm: 305}, {id: 5, name: 'abs', orm: 105}, {id: 6, name: 'curls', orm: 75}]

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

const exercises = (state = [...initState], action) => {
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