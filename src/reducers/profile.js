/**
 * Created by chris on 2/8/17.
 */

const profile = (state = {}, action) => {
    switch (action.type) {
        case 'INITIALIZE_PROFILE':
            return {
                name: 'Chris',
                height: 67,
                age: 24,
                dayOfProgram: 0,
                streak: 0
            };
        case 'SUCCESSFUL_WORKOUT':
            return {
                ...state,
                dayOfProgram: state.dayOfProgram + 1
            };

        default:
            return state;
    }
}

export default profile