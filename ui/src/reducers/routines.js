/**
 * Created by chris on 2/8/17.
 */
import {initRoutine} from './initData'

const routine = (state, action) => {
    switch (action.type) {
        case 'ADD_ROUTINE':
            return {
                id: action.id,
                ...action.routine,
            };
        case 'EDIT_ROUTINE':
            if (state.id !== action.id) {
                return state
            }

            return {
                ...state,
                ...action.routine,
            };
        default:
            return state
    }
};

const routines = (state = [initRoutine], action) => {
    switch (action.type) {
        case 'ADD_ROUTINE':
            return [
                ...state,
                routine(undefined, action)
            ];
        case 'EDIT_ROUTINE':
            return state.map(r =>
                routine(r, action)
            );
        case 'DELETE_ROUTINE':
            return [];
        default:
            return state;
    }
};
export default routines