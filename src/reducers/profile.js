/**
 * Created by chris on 2/8/17.
 */

const initialState = {
    name: 'Chris',
    height: 67,
    age: 24,
    program: [],
    dateLog: [],
    dayOfProgram: 0,
    dayView: 0,
    selectedRoutine: 0,
    streak: 0
};

const profile = (state = {...initialState}, action) => {
    switch (action.type) {
        case 'INITIALIZE_PROFILE':
            return {
                ...initialState,
                dayView: initialState.dayOfProgram
            };
        case 'STORE_PROGRAM':
            return {
                ...state,
                program: action.program
            };
        case 'SUCCESSFUL_WORKOUT':
            return {
                ...state,
                dayOfProgram: state.dayOfProgram + 1
            };
        case 'VIEW_WORKOUT': {
            return {
                ...state,
                dayView: action.dayView
            }
        }

        default:
            return state;
    }
};

export default profile