/**
 * Created by chris on 2/8/17.
 */

// const rawRoutine = {
//     exercises: [{id: 0, name: 'squat', orm: 345}, {id: 1, name: 'shoulder press', orm: 175},
//         {id: 2, name: 'bench press', orm: 275}, {id: 3, name: 'rows', orm: 275},
//         {id: 4, name: 'deadlift', orm: 305}, {id: 5, name: 'abs', orm: 105}, {id: 6, name: 'curls', orm: 75}],
//     numDays: 3,
//     numWeeks: 7,
//     numWorkouts: 21,
//     numSplit: 2,
//     exerciseSplit: [['squat', 'shoulder press', 'rows', 'bench press', 'abs', 'curls'],
//         ['squat', 'shoulder press', 'deadlift', 'bench press', 'abs', 'curls']],
//
//     schemaUpdateRate: 3,
//     schema: [dayScheme(3, 10, .60), dayScheme(3, 10, .65),
//         dayScheme(3, 8, .70), dayScheme(3, 8, .75),
//         dayScheme(3, 5, .80), dayScheme(3, 5, .85), dayScheme(1, 1, 1)],
// };

// var program = [dayOfProgram_1, ... day_n
// var dayOfProgram = [exercise1, ... ,ex_n]
// var exercise = {sets, reps, weight }
//
// const routine = {
//
//     rawRoutine,
//     program,
//     dateLog: []
// };

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
            };
        default:
            return state
    }
};

const routines = (state = [], action) => {
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