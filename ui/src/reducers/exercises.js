/**
 * Created by chris on 2/8/17.
 */
const PRIMARY_LIFT = 1;
const SECONDARY_LIFT = 2;
const OTHER = 3;
const STRETCH = 4;

import {initExercises} from '../initData/initData'


const exercise = (state, action) => {
    switch (action.type) {
        case 'ADD_EXERCISE':
            return {
                id: action.id,
                name: action.name,
                class: action.class,
                orm: 0,
            };
        case 'EDIT_EXERCISE':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                ...action.editData,
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

const exercises = (state = [...initExercises], action) => {
    switch (action.type) {
        case 'ADD_EXERCISE':
            return [
                ...state,
                exercise(undefined, action)
            ];

        case 'EDIT_EXERCISES':
        case 'UPDATE_ORM':
            return state.map(lift => exercise(lift, action));

        case 'DELETE_EXERCISE':
            return state.slice(0,action.index).concat(action.index + 1);
        default:
            return state;
    }
};

export default exercises;