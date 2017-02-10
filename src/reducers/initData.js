/**
 * Created by chris on 2/9/17.
 */

const PRIMARY_LIFT = 1;
const SECONDARY_LIFT = 2;
const OTHER = 3;
const STRETCH = 4;

export const initExercises = [{id: 0, class: PRIMARY_LIFT, name: 'Squat', orm: 345}, {id: 1, class: PRIMARY_LIFT, name: 'Shoulder press', orm: 175},
    {id: 2, class: PRIMARY_LIFT, name: 'Bench press', orm: 275}, {id: 3, class: PRIMARY_LIFT, name: 'Rows', orm: 275},
    {id: 4, class: PRIMARY_LIFT, name: 'Deadlift', orm: 305}, {id: 5, class: SECONDARY_LIFT, name: 'Abs', orm: 105},
    {id: 6, class: SECONDARY_LIFT, name: 'Bicep curls', orm: 75}, {id: 7, class: SECONDARY_LIFT, name: 'Tricep Extensions', orm: 135}];

export const dayScheme = (sets, reps, percent) => {
    return {
        sets: sets,
        reps: reps,
        percent: percent,
    }
};

const exerciseSplitString = [['Squat', 'Shoulder press', 'Rows', 'Bench press', 'Abs', 'Bicep curls'],
    ['Squat', 'Shoulder press', 'Deadlift', 'Bench press', 'Abs', 'Bicep curls']];

const idKey = (exercises) => {
    console.log(exercises);
    let key = {};
    for (let i in exercises) {
        key[exercises[i].name] = exercises[i];
    }
    return key;
};

const strKey = (exercises) => {
    console.log(exercises);
    let key = {};
    for (let i in exercises) {
        key[exercises[i].id] = exercises[i].name;
    }
    return key;
};

const exerciseSplitConverter = (exercises, split) => {
    let enumExSplit = [];
    let key = idKey(exercises);
    console.log(key)

    for (let day in split) {
        let dayValue = split[day];
        let enumDay = [];

        for (let ex in dayValue) {
            enumDay.push(key[dayValue[ex]])
        }
        enumExSplit.push(enumDay);
    }
    return enumExSplit;
};

export const initRoutine = {
    exercises: initExercises,
    numDays: 3,
    numWeeks: 7,
    numWorkouts: 21,
    numSplit: 2,
    exerciseSplit: exerciseSplitConverter(initExercises, exerciseSplitString),
    idKey: idKey(initExercises),
    strKey: strKey(initExercises),
    schema: {primary: [dayScheme(3, 10, .60), dayScheme(3, 10, .65),
        dayScheme(3, 8, .70), dayScheme(3, 8, .75),
        dayScheme(3, 5, .80), dayScheme(3, 5, .85), dayScheme(3, 6, .65)],
        secondary: [dayScheme(3, 12, .60), dayScheme(3, 12, .60),
            dayScheme(3, 10, .65), dayScheme(3, 10, .65),
            dayScheme(3, 8, .7), dayScheme(3, 8, .75), dayScheme(3, 12, .55)],
        other: [],
        stretch: [],
        updateRate: 3, },
};